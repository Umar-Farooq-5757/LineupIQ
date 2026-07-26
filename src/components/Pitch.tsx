import { useAppContext } from "@/context/AppContext";
import anonymousImage from "../data/images/players/anonymous.webp";
import GuessingBox from "./GuessingBox";

interface Player {
  id: string;
  name: string;
  shirtNumber: number;
  position: string;
  gridCoordinates: { x: number; y: number };
  isHidden: boolean;
  targetPlayerId?: string;
  image: string;
}

interface PitchProps {
  players: Player[][];
}

const Pitch = ({ players }: PitchProps) => {
  const { setIsGuessingBoxOpen } = useAppContext();

  const openGuessingBox = (player: Player) => {
    if (player.isHidden) {
      setIsGuessingBoxOpen(true);
    }
  };

  const formatPlayerName = (name: string, isHidden: boolean) => {
    if (isHidden) return "?";
    return name.includes(" ") ? name.replace(/^\S+\s*/, "") : name;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <section className="bg-[#01935C] w-full aspect-[6/7] rounded-xl relative overflow-hidden shadow-2xl border border-emerald-600/30">
        {/* Pitch Markings */}
        {/* Top Penalty Area */}
        <div className="border-[#0D9F68] border-b-2 border-r-2 border-l-2 rounded-b-md w-1/2 h-[20%] mx-auto absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="border-[#0D9F68] border-b-2 border-r-2 border-l-2 rounded-b-md w-1/2 h-[50%] mx-auto absolute top-0 left-1/2 -translate-x-1/2" />
        </div>

        {/* Center Circle & Line */}
        <div className="pointer-events-none">
          <div className="w-[30%] aspect-square rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[#0D9F68] border-2" />
          <div className="bg-[#0D9F68] w-full h-0.5 absolute top-1/2 -translate-y-1/2" />
        </div>

        {/* Bottom Penalty Area */}
        <div className="border-[#0D9F68] border-t-2 border-r-2 border-l-2 rounded-t-md w-1/2 h-[20%] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="border-[#0D9F68] border-t-2 border-r-2 border-l-2 rounded-t-md w-1/2 h-[50%] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>

        {/* Players Overlay */}
        <div className="absolute inset-0 p-2 sm:p-4 flex flex-col justify-between py-4 z-10">
          {players.map((row: Player[], rowIndex: number) => (
            <div className="flex justify-around items-center w-full" key={rowIndex}>
              {row.map((player: Player) => {
                const isClickable = player.isHidden;
                return (
                  <button
                    type="button"
                    onClick={() => openGuessingBox(player)}
                    key={player.id || `${rowIndex}-${player.name}`}
                    disabled={!isClickable}
                    className={`flex flex-col items-center group transition-transform active:scale-95 focus:outline-none ${
                      isClickable ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div
                      className={`bg-[#008452] rounded-full p-1 border shadow-md transition-all ${
                        isClickable
                          ? "border-amber-300 ring-2 ring-amber-400/30 group-hover:scale-105"
                          : "border-emerald-400/30"
                      }`}
                    >
                      <img
                        className="size-8 xs:size-10 sm:size-12 object-cover rounded-full"
                        src={player.isHidden ? anonymousImage : player.image}
                        alt={player.isHidden ? "Hidden Player" : player.name}
                      />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-white drop-shadow-md text-center max-w-[70px] xs:max-w-[85px] truncate mt-1 leading-tight">
                      {formatPlayerName(player.name, player.isHidden)}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <GuessingBox />
      </section>
    </div>
  );
};

export default Pitch;