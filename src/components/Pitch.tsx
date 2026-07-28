import PlayerCard from "./PlayerCard";
import { useGame, type HiddenPlayer } from "@/context/GameContext";

interface Player {
  id: string;
  name: string;
  shirtNumber: number;
  position: string;
  gridCoordinates: {
    x: number;
    y: number;
  };
  isHidden: boolean;
  targetPlayerId?: string;
  image: string;
}

interface PitchProps {
  players: Player[][];
  hiddenPlayersData: HiddenPlayer[];
}

const Pitch = ({ players, hiddenPlayersData }: PitchProps) => {
  const { setSelectedPlayer, foundPlayers } = useGame();

  const handleSelectPlayer = (player: Player) => {
    if (!player.isHidden || !player.targetPlayerId) return;

    if (foundPlayers.includes(player.targetPlayerId)) return;

    const hiddenPlayer = hiddenPlayersData.find(
      (p) => p.targetPlayerId === player.targetPlayerId,
    );

    if (!hiddenPlayer) return;

    setSelectedPlayer(hiddenPlayer);
  };

  return (
    <div className="mx-auto w-full max-w-lg">
      <section className="relative mx-auto aspect-[6/7] w-full overflow-hidden rounded-2xl border border-emerald-500/20 bg-[#0D8A58] shadow-2xl">
        {/* ===================== */}
        {/* Pitch Markings */}
        {/* ===================== */}

        {/* Top Penalty Box */}
        <div className="absolute left-1/2 top-0 h-[20%] w-1/2 -translate-x-1/2 border-x border-b border-[#28B377] sm:border-x-2 sm:border-b-2">
          <div className="absolute left-1/2 top-0 h-1/2 w-1/2 -translate-x-1/2 border-x border-b border-[#28B377] sm:border-x-2 sm:border-b-2" />
        </div>

        {/* Center Circle */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 aspect-square h-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#28B377] sm:border-2" />

          <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-[#28B377]" />

          <div className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#28B377] sm:size-2" />
        </div>

        {/* Bottom Penalty Box */}
        <div className="absolute bottom-0 left-1/2 h-[20%] w-1/2 -translate-x-1/2 border-x border-t border-[#28B377] sm:border-x-2 sm:border-t-2">
          <div className="absolute bottom-0 left-1/2 h-1/2 w-1/2 -translate-x-1/2 border-x border-t border-[#28B377] sm:border-x-2 sm:border-t-2" />
        </div>

        {/* ===================== */}
        {/* Players */}
        {/* ===================== */}

        <div className="absolute inset-0 z-10 flex flex-col justify-between px-2 py-3 sm:px-4 sm:py-5 md:px-5 md:py-6 lg:px-6 lg:py-7">
          {players.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex w-full items-center justify-evenly gap-1 sm:gap-2 md:gap-3">
              {row.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  onSelect={handleSelectPlayer}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pitch;
