import { Trophy } from "lucide-react";
import { useGame } from "@/context/GameContext";

export default function ScoreCard() {
  const { score } = useGame();

  return (
    <div className="rounded-xl bg-neutral-900 p-5 border border-neutral-800">
      <div className="flex justify-between">
        <div>
          <p className="text-neutral-400">Current Score</p>
          <h2 className="text-4xl font-bold mt-1">{score}</h2>
        </div>
        <Trophy className="text-yellow-400" />
      </div>
    </div>
  );
}
