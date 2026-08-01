// GameCompleteModal.tsx
import {
  Trophy,
  Target,
  XCircle,
  Sparkles,
  RotateCcw,
  Share2,
  ArrowRight,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  score: number;
  guesses: number;
  wrongGuesses: number;
  hintsUsed: number;
  onPlayAgain: () => void;
  onNextLevel: () => void;
  hasNextLevel: boolean;
  trivia: string;
}

export default function GameCompleteModal({
  open,
  onOpenChange,
  score,
  guesses,
  wrongGuesses,
  hintsUsed,
  onPlayAgain,
  onNextLevel,
  hasNextLevel,
  trivia,
}: Props) {
  const accuracy =
    guesses === 0
      ? 100
      : Math.round(((guesses - wrongGuesses) / guesses) * 100);

  const shareText = `🏆 Lineup IQ\n\nScore: ${score}\nAccuracy: ${accuracy}%\nHints Used: ${hintsUsed}\n\nCan you beat me?`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-neutral-700 bg-[#191919] text-white">
        <div className="py-3">
          <div className="flex justify-center">
            <div className="rounded-full bg-yellow-500/15 p-5">
              <Trophy className="text-yellow-400" size={48} />
            </div>
          </div>

          <h1 className="mt-6 text-center text-4xl font-bold">
            Puzzle Complete!
          </h1>

          <p className="mt-2 text-center text-neutral-400">
            You identified every hidden player.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Stat
              icon={<Sparkles className="size-5" />}
              title="Score"
              value={score}
            />
            <Stat
              icon={<Target className="size-5" />}
              title="Accuracy"
              value={`${accuracy}%`}
            />
            <Stat
              icon={<Target className="size-5" />}
              title="Guesses"
              value={guesses}
            />
            <Stat
              icon={<XCircle className="size-5" />}
              title="Wrong"
              value={wrongGuesses}
            />
            <Stat
              icon={<Target className="size-5" />}
              title="Hints"
              value={hintsUsed}
            />
          </div>
          <div className="mt-3 px-2">
            <h2 className="font-bold text-2xl">Trivia</h2>
            <p className="bg-neutral-800 py-3 px-4 rounded-r-md border-l-4 border-neutral-500 mt-5">{trivia}</p>
          </div>
          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(shareText)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-800 py-3 font-semibold transition hover:bg-neutral-700">
              <Share2 size={18} />
              Copy Result
            </button>

            {hasNextLevel ? (
              <button
                type="button"
                onClick={onNextLevel}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-bold text-black transition hover:bg-green-400">
                Next Level
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="button"
                onClick={onPlayAgain}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-bold text-black transition hover:bg-green-400">
                <RotateCcw size={18} />
                Play Again
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex items-center gap-2 text-neutral-400">
        {icon}
        <span>{title}</span>
      </div>
      <div className="mt-3 text-3xl font-bold">{value}</div>
    </div>
  );
}
