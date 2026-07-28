import {
  Flag,
  Shirt,
  Map,
  Footprints,
  MapPinned,
  Lock,
  Sparkles,
} from "lucide-react";

import { useGame } from "@/context/GameContext";

export default function HintList() {
  const { selectedPlayer, revealedHints, revealNextHint } = useGame();

  if (!selectedPlayer) return null;

  const revealed = revealedHints[selectedPlayer.targetPlayerId] ?? 0;

  const clues = selectedPlayer.progressiveClues;

  const allHintsUsed = revealed >= clues.length;

  const icon = (type: string) => {
    switch (type) {
      case "nationality":
        return <Flag className="size-5 text-sky-400" />;

      case "position":
        return <Map className="size-5 text-purple-400" />;

      case "careerPath":
        return <Footprints className="size-5 text-yellow-400" />;

      case "shirtNumber":
        return <Shirt className="size-5 text-pink-400" />;

      case "heatmap":
        return <MapPinned className="size-5 text-orange-400" />;

      default:
        return <Sparkles className="size-5 text-green-400" />;
    }
  };

  function formatValue(value: string | number | string[]): string | number {
    if (Array.isArray(value)) {
      return value.join(" → ");
    }

    return value;
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#1a1a1a]">
      <div className="border-b border-neutral-800 px-5 py-4">
        <h3 className="text-lg font-semibold">Progressive Hints</h3>

        <p className="mt-1 text-sm text-neutral-500">
          Reveal hints one at a time. Every hint costs points.
        </p>
      </div>

      <div className="space-y-3 p-5">
        {clues.map((clue, index) => {
          const unlocked = index < revealed;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                unlocked
                  ? "border-green-500/40 bg-green-500/5"
                  : "border-neutral-800 bg-neutral-900"
              }`}>
              <div className="flex items-center gap-3 px-4 py-4">
                {unlocked ? (
                  icon(clue.type)
                ) : (
                  <Lock className="size-5 text-neutral-500" />
                )}

                <div className="flex-1">
                  <p className="font-medium capitalize">
                    {clue.type.replace(/([A-Z])/g, " $1")}
                  </p>

                  <p className="mt-1 text-sm text-neutral-400">
                    {unlocked ? formatValue(clue.value) : "Locked"}
                  </p>
                </div>

                {!unlocked && (
                  <span className="text-xs text-neutral-500">#{index + 1}</span>
                )}
              </div>
            </div>
          );
        })}

        <button
          disabled={allHintsUsed}
          onClick={revealNextHint}
          className="mt-3 w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-40">
          {allHintsUsed ? "All Hints Revealed" : "Reveal Next Hint (-20 pts)"}
        </button>

        {allHintsUsed && (
          <p className="text-center text-sm text-amber-400">
            All hints have been revealed. You can now reveal the player from the
            Guess Player panel.
          </p>
        )}
      </div>
    </section>
  );
}
