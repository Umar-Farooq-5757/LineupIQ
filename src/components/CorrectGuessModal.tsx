import { CheckCircle2, Star, Clock3 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { HiddenPlayer } from "@/context/GameContext";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  player: HiddenPlayer | null;
  pointsEarned: number;
}

export default function CorrectGuessModal({
  open,
  onOpenChange,
  player,
  pointsEarned,
}: Props) {
  if (!player) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-neutral-700 bg-[#1b1b1b] text-white">
        <div className="flex flex-col items-center py-6">
          <div className="rounded-full bg-green-500/20 p-4">
            <CheckCircle2 className="text-green-400" size={48} />
          </div>

          <h2 className="mt-5 text-3xl font-bold">
            {pointsEarned > 0 ? "Correct!" : "Player Revealed"}
          </h2>

          <img
            src={player.identity.image}
            alt={player.identity.name}
            className="mt-6 size-28 rounded-full border-4 border-green-500 object-cover shadow-xl"
          />

          <h3 className="mt-4 text-center text-2xl font-bold">
            {player.identity.name}
          </h3>

          <p className="mt-1 text-neutral-400">{player.identity.position}</p>

          <div className="mt-8 grid w-full grid-cols-2 gap-4">
            <div className="rounded-xl bg-neutral-900 p-4">
              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                Minutes
              </div>

              <p className="mt-2 text-2xl font-bold">
                {player.matchStats.minutesPlayed}
              </p>
            </div>

            <div className="rounded-xl bg-neutral-900 p-4">
              <div className="flex items-center gap-2">
                <Star size={18} />
                Rating
              </div>

              <p className="mt-2 text-2xl font-bold">
                {player.matchStats.rating}
              </p>
            </div>
          </div>

          <div
            className={`mt-8 rounded-xl px-6 py-4 ${
              pointsEarned > 0
                ? "border border-green-500/30 bg-green-500/10"
                : "border border-amber-500/30 bg-amber-500/10"
            }`}>
            <p
              className={`text-center text-sm font-semibold ${
                pointsEarned > 0 ? "text-green-300" : "text-amber-300"
              }`}>
              {pointsEarned > 0
                ? `+${pointsEarned} Points`
                : "-50 Points (Player Revealed)"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
