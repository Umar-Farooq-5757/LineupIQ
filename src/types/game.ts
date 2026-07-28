import type { HiddenPlayer } from "@/context/GameContext";



export interface SelectedPlayer {
  id: string;
  data: HiddenPlayer;
}

export interface GameState {
  score: number;
  selectedPlayer: SelectedPlayer | null;
  foundPlayers: string[];
  revealedHints: Record<string, number>;
  wrongGuesses: number;
  guesses: number;
}
