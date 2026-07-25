import { FaGithub } from "react-icons/fa";
import { DialogTrigger } from "./ui/dialog";

const Header = () => {
  return (
    <header className="bg-[#1a1a1a] flex justify-between items-center py-4 px-1.5 sm:px-8 md:px-20">
      <h1 className="text-2xl font-bold">Lineup IQ</h1>
      <div className="flex justify-center items-center gap-4">
        <DialogTrigger 
        render={
          <button className="bg-[#2e2e2e] hover:bg-[#3e3e3e] cursor-pointer rounded-full text-sm font-bold px-5 py-1.5">
            How to play?
          </button>
        }
        />
          
        <button className="bg-[#2e2e2e] hover:bg-[#3e3e3e] cursor-pointer p-2 rounded-full">
          <FaGithub />
        </button>
      </div>
    </header>
  );
};

export default Header;
