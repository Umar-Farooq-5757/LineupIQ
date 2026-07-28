import anonymousImage from "@/data/images/players/anonymous.webp";
import { useGame } from "@/context/GameContext";

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

interface Props {
  player: Player;
  onSelect: (player: Player) => void;
}

export default function PlayerCard({ player, onSelect }: Props) {
  const { foundPlayers } = useGame();

  const solved =
    !!player.targetPlayerId && foundPlayers.includes(player.targetPlayerId);

  const hidden = player.isHidden && !solved;

  const displayName = hidden
    ? "?"
    : player.name.includes(" ")
      ? player.name.replace(/^\S+\s*/, "")
      : player.name;

  return (
    <button
      type="button"
      disabled={!player.isHidden}
      onClick={() => onSelect(player)}
      className={`group flex min-w-0 flex-col items-center transition-transform duration-200 ${
        player.isHidden ? "cursor-pointer" : "cursor-default"
      }`}>
      <div
        className={`relative flex items-center justify-center rounded-full p-0.5 transition-all duration-300 bg-[#008452] border-green-600 border`}>
        <img
          src={hidden ? anonymousImage : player.image}
          alt={player.name}
          draggable={false}
          className="size-9 select-none rounded-full object-cover sm:size-10 md:size-11 lg:size-12 xl:size-13"
        />

        {hidden && (
          <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-amber-300 drop-shadow-lg sm:text-base lg:text-lg">
            ?
          </div>
        )}

        {solved && (
          <div className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-black text-black sm:size-5 sm:text-xs">
            ✓
          </div>
        )}
      </div>

      <span
        className="mt-1.5 max-w-[56px] truncate text-center text-[10px] font-semibold leading-tight text-white sm:max-w-[68px] sm:text-xs md:max-w-[82px] md:text-sm lg:max-w-[96px]"
        title={player.name}>
        {displayName}
      </span>
    </button>
  );
}
