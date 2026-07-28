import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface ProgressiveClue {
  attempt: number;
  type: string;
  value: string | number | string[];
  flag?: string;
}

export interface HiddenPlayer {
  targetPlayerId: string;

  identity: {
    name: string;
    nationality: string;
    nationalityCode: string;
    ageAtMatch: number;
    preferredFoot: string;
    shirtNumber: number;
    position: string;
    image: string;
  };

  matchStats: {
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    rating: number;
  };

  progressiveClues: ProgressiveClue[];
}

interface GameContextType {
  selectedPlayer: HiddenPlayer | null;
  setSelectedPlayer: React.Dispatch<React.SetStateAction<HiddenPlayer | null>>;

  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;

  foundPlayers: string[];
  setFoundPlayers: React.Dispatch<React.SetStateAction<string[]>>;

  guesses: number;
  wrongGuesses: number;

  revealedHints: Record<string, number>;

  revealNextHint(): void;

  revealPlayer(): HiddenPlayer | null;

  submitGuess(name: string): boolean;

  resetGame(): void;

  isAboutOpen: boolean;
  setIsAboutOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [selectedPlayer, setSelectedPlayer] = useState<HiddenPlayer | null>(
    null,
  );

  const [score, setScore] = useState(500);

  const [foundPlayers, setFoundPlayers] = useState<string[]>([]);

  const [revealedHints, setRevealedHints] = useState<Record<string, number>>(
    {},
  );

  const [guesses, setGuesses] = useState(0);

  const [wrongGuesses, setWrongGuesses] = useState(0);

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  function revealNextHint() {
    if (!selectedPlayer) return;

    const id = selectedPlayer.targetPlayerId;

    const revealed = revealedHints[id] ?? 0;

    if (revealed >= selectedPlayer.progressiveClues.length) return;

    setRevealedHints((prev) => ({
      ...prev,
      [id]: revealed + 1,
    }));

    setScore((s) => Math.max(0, s - 20));
  }

  function revealPlayer(): HiddenPlayer | null {
    if (!selectedPlayer) return null;

    if (foundPlayers.includes(selectedPlayer.targetPlayerId)) {
      return null;
    }

    const player = selectedPlayer;

    setScore((s) => Math.max(0, s - 50));

    setFoundPlayers((prev) => [...prev, player.targetPlayerId]);

    setSelectedPlayer(null);

    return player;
  }

  function submitGuess(name: string): boolean {
    if (!selectedPlayer) return false;

    if (foundPlayers.includes(selectedPlayer.targetPlayerId)) {
      return false;
    }

    setGuesses((g) => g + 1);

    const correct =
      name.trim().toLowerCase() ===
      selectedPlayer.identity.name.trim().toLowerCase();

    if (correct) {
      setFoundPlayers((prev) => [...prev, selectedPlayer.targetPlayerId]);

      setScore((s) => s + 100);

      setSelectedPlayer(null);

      return true;
    }

    setWrongGuesses((g) => g + 1);

    setScore((s) => Math.max(0, s - 15));

    return false;
  }

  function resetGame() {
    setSelectedPlayer(null);
    setScore(500);
    setFoundPlayers([]);
    setRevealedHints({});
    setGuesses(0);
    setWrongGuesses(0);
  }

  const value = useMemo(
    () => ({
      selectedPlayer,
      setSelectedPlayer,

      score,
      setScore,

      foundPlayers,
      setFoundPlayers,

      guesses,
      wrongGuesses,

      revealedHints,

      revealNextHint,
      revealPlayer,

      submitGuess,

      resetGame,

      isAboutOpen,
      setIsAboutOpen,
    }),
    [
      selectedPlayer,
      score,
      foundPlayers,
      guesses,
      wrongGuesses,
      revealedHints,
      isAboutOpen,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }

  return context;
}
