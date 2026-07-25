const PlayerCard = ({ name, src }) => {
  return (
    <div>
      <div className="bg-[#008452] w-fit rounded-full mx-auto flex flex-col items-center p-2">
        <img className="size-12" src={src} alt="" />
      </div>
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
};

export default PlayerCard;
