import anonymousImage from '../data/images/players/anonymous.webp';

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
  return (
    <div className="w-full max-w-lg px-4 mx-auto">
      <section className="bg-[#01935C] w-full aspect-6/7 rounded-md relative overflow-hidden shadow-lg">
        {/* Pitch Markings */}
        {/* Top Penalty Area */}
        <div className="border-[#0D9F68] border-b-4 border-r-4 border-l-4 rounded-b-md w-1/2 h-[20%] mx-auto absolute top-0 left-1/2 -translate-x-1/2">
          <div className="border-[#0D9F68] border-b-4 border-r-4 border-l-4 rounded-b-md w-1/2 h-[50%] mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
        </div>

        {/* Center Circle & Line */}
        <div>
          <div className="w-[30%] aspect-square rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[#0D9F68] border-4 pointer-events-none"></div>
          <div className="bg-[#0D9F68] w-full h-1 absolute top-1/2 -translate-y-1/2"></div>
        </div>

        {/* Bottom Penalty Area */}
        <div className="border-[#0D9F68] border-t-4 border-r-4 border-l-4 rounded-t-md w-1/2 h-[20%] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="border-[#0D9F68] border-t-4 border-r-4 border-l-4 rounded-t-md w-1/2 h-[50%] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2"></div>
        </div>

        {/* Players Overlay */}
        <div className="absolute inset-0 p-2 sm:p-4 flex flex-col justify-around py-4">
          {players.map((row: Player[], index: number) => {
            return (
              <div className="flex justify-around items-center" key={index}>
                {row.map((player: Player, idx: number) => {
                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="bg-[#008452] rounded-full flex items-center justify-center p-1 border border-emerald-400/30 shadow-sm">
                        <img
                          className="size-10 sm:size-11 object-cover rounded-full"
                          src={player.isHidden ? anonymousImage : player.image}
                          alt={player.name}
                        />
                      </div>
                      <p className="font-semibold text-xs sm:text-sm text-white drop-shadow-md text-center max-w-20.5 sm:max-w-22.5 truncate mt-0.5">
                        {player.isHidden ? '?' : player.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Pitch;