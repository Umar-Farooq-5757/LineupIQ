import { useGame } from "@/context/GameContext";

interface Props {
  total: number;
}

export default function ProgressCard({ total }: Props) {
  const { foundPlayers } = useGame();

  const percent = (foundPlayers.length / total) * 100;

  return (
    <div className="rounded-xl bg-neutral-900 p-5 border border-neutral-800">
      <p className="text-neutral-400">Progress</p>
      <div className="mt-3">
        <div className="flex justify-between">
          <span>Found</span>
          <span>
            {foundPlayers.length}/{total}
          </span>
        </div>
        <div className="h-2 rounded-full bg-neutral-800 mt-3">
          <div
            style={{
              width: `${percent}%`,
            }}
            className="bg-green-500 h-full rounded-full transition-all"
          />
        </div>
      </div>
    </div>
  );
}
