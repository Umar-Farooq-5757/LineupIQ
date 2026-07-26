import { useAppContext } from "@/context/AppContext";
import { Dialog, DialogContent } from "./ui/dialog";

const GuessingBox = () => {
  const { isGuessingBoxOpen, setIsGuessingBoxOpen } = useAppContext();
  return (
    <Dialog open={isGuessingBoxOpen} onOpenChange={setIsGuessingBoxOpen}>
      <DialogContent className="bg-[#1a1a1a] text-white w-[95vw] h-1/2">
        <section className="py-8">
          <div className="flex justify-between items-center gap-2 px-6">
            <input
              className="outline-none border-2 border-[#2e2e2e] grow px-2 py-1.5 rounded-md"
              type="text"
              placeholder="Guess the player..."
            />
            <button className="bg-green-500 text-black font-semibold px-2 py-1.5 rounded-md button-shadow transition-all cursor-pointer hover:opacity-70">
              Guess
            </button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default GuessingBox;
