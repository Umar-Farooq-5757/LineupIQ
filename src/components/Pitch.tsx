import PlayerCard from "./PlayerCard";

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
    <section className="bg-[#01935C] w-135 h-160 rounded-md relative">
      {/* Drawing on the field */}
      <div className="border-[#0D9F68] border-b-4 border-r-4 border-l-4 rounded-b-md w-3/8 h-24 mx-auto absolute top-0 left-1/2 -translate-x-1/2">
        <div className="border-[#0D9F68] border-b-4 border-r-4 border-l-4 rounded-b-md w-1/2 h-12 mx-auto absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>
      <div>
        <div className="size-34 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[#0D9F68] border-4"></div>
        <div className="bg-[#0D9F68] w-full h-1 absolute top-1/2 -translate-y-1/2"></div>
      </div>
      <div className="border-[#0D9F68] border-t-4 border-r-4 border-l-4 rounded-t-md w-3/8 h-24 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2">
        <div className="border-[#0D9F68] border-t-4 border-r-4 border-l-4 rounded-t-md w-1/2 h-12 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
      {/* Mapping players */}
      <div>
        <div className="flex flex-col justify-start gap-17 absolute inset-0 top-8">
          {players.map((row: Player[], index: number) => {
            return (
              <div className="flex justify-evenly" key={index}>
                {row.map((player: Player, idx: number) => {
                  return (
                    <div key={idx}>
                      <PlayerCard name={player.name} src={player.image} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pitch;
