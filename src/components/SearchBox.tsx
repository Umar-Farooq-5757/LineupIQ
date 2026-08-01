import { useMemo, useState } from "react";
import { Search, CheckCircle2, XCircle, Eye } from "lucide-react";

import players from "@/data/players";
import { useGame, type HiddenPlayer } from "@/context/GameContext";
import CorrectGuessModal from "./CorrectGuessModal";

export default function SearchBox() {
  const { selectedPlayer, submitGuess, revealedHints, revealPlayer } =
    useGame();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const [showReveal, setShowReveal] = useState(false);
  const [revealedPlayer, setRevealedPlayer] = useState<HiddenPlayer | null>(
    null,
  );
  const [pointsEarned, setPointsEarned] = useState(100);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    return players
      .filter((player) =>
        player.toLowerCase().includes(query.trim().toLowerCase()),
      )
  }, [query]);

  if (!selectedPlayer) return null;

  const revealed = revealedHints[selectedPlayer.targetPlayerId] ?? 0;

  const allHintsUsed = revealed >= selectedPlayer.progressiveClues.length;

  function openRevealModal(player: HiddenPlayer, points: number) {
    setRevealedPlayer(player);
    setPointsEarned(points);
    setShowReveal(true);
  }

  function guess(name: string) {
    // Save reference BEFORE submitGuess clears selectedPlayer
    const player = selectedPlayer;

    const correct = submitGuess(name);

    if (correct && player) {
      openRevealModal(player, 100);
    }

    setFeedback(correct ? "correct" : "wrong");

    setTimeout(() => {
      setFeedback(null);
    }, 1500);

    setQuery("");
    setSelectedIndex(0);
  }

  function revealCurrentPlayer() {
    // Save reference BEFORE revealPlayer clears selectedPlayer
    const player = selectedPlayer;

    const revealed = revealPlayer();

    if (revealed && player) {
      openRevealModal(player, 0);
    }

    setQuery("");
    setSelectedIndex(0);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        setSelectedIndex((prev) =>
          Math.min(prev + 1, Math.max(0, suggestions.length - 1)),
        );
        break;

      case "ArrowUp":
        e.preventDefault();

        setSelectedIndex((prev) => Math.max(prev - 1, 0));
        break;

      case "Enter":
        e.preventDefault();

        if (suggestions.length > 0) {
          guess(suggestions[selectedIndex]);
        } else if (query.trim()) {
          guess(query.trim());
        }

        break;
    }
  }

  return (
    <>
      <CorrectGuessModal
        open={showReveal}
        onOpenChange={setShowReveal}
        player={revealedPlayer}
        pointsEarned={pointsEarned}
      />

      <section className="overflow-visible rounded-2xl border border-neutral-800 bg-[#1a1a1a] shadow-lg">
        <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-4 sm:px-5">
          <Search className="size-5 shrink-0 text-green-400" />
          <h3 className="text-base font-semibold sm:text-lg">Guess Player</h3>
        </div>

        <div className="p-4 sm:p-5">
          <div className="relative">
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={onKeyDown}
              placeholder="Search player..."
              className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-neutral-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />

            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-64 overflow-y-auto rounded-xl border border-neutral-700 bg-neutral-900 shadow-2xl">
                {suggestions.map((player, index) => (
                  <button
                    key={player}
                    type="button"
                    onClick={() => guess(player)}
                    className={`flex w-full items-center px-4 py-3 text-left text-sm transition-colors ${
                      selectedIndex === index
                        ? "bg-green-600 text-white"
                        : "text-neutral-200 hover:bg-neutral-800"
                    }`}>
                    <span className="truncate">{player}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {feedback === "correct" && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-green-400">
              <CheckCircle2 className="size-5" />
              <span className="text-sm font-medium">Correct!</span>
            </div>
          )}

          {feedback === "wrong" && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-400">
              <XCircle className="size-5" />
              <span className="text-sm font-medium">Wrong guess.</span>
            </div>
          )}

          {allHintsUsed && (
            <div className="mt-5 border-t border-neutral-800 pt-5">
              <button
                onClick={revealCurrentPlayer}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 font-semibold text-black transition hover:bg-amber-400">
                <Eye size={18} />
                Reveal Player (-50 pts)
              </button>

              <p className="mt-2 text-center text-xs text-neutral-500">
                Can't figure it out? Reveal the player and continue the puzzle.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
