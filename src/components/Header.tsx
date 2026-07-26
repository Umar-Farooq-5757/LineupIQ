import { useAppContext } from "@/context/AppContext";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const {setIsAboutOpen} = useAppContext()
  return (
    <header className="bg-[#1a1a1a] flex justify-between items-center py-4 px-1.5 sm:px-8 md:px-20">
      <h1 className="text-2xl font-bold">Lineup IQ</h1>
      <div className="flex justify-center items-center gap-4">
            <button onClick={()=>setIsAboutOpen(true)} className="bg-[#2e2e2e] hover:bg-[#3e3e3e] cursor-pointer rounded-full text-sm font-bold px-5 py-1.5">
              How to play?
            </button>

        <button
          onClick={() =>
            window.open(
              "https://github.com/umar-farooq-5757/lineupiq",
              "_blank",
              "noopener,noreferrer",
            )
          }
          className="bg-[#2e2e2e] hover:bg-[#3e3e3e] cursor-pointer p-2 rounded-full">
          <FaGithub />
        </button>
      </div>
    </header>
  );
};

export default Header;
