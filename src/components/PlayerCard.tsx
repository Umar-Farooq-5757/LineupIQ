interface PlayerCardProps {
  name: string;
  src: string;
}

const PlayerCard = ({ name, src }: PlayerCardProps) => {
  return (
    <div>
      <div className="bg-[#008452] w-fit rounded-full mx-auto flex flex-col items-center p-1">
        <img className="size-13" src={src} alt="" />
      </div>
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
};

export default PlayerCard;
