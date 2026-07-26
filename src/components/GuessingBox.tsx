import { useAppContext } from "@/context/AppContext";
import { Dialog, DialogContent } from "./ui/dialog";
import { useState } from "react";
import { Flag, Footprints, Shirt } from "lucide-react";

const GuessingBox = () => {
  const { isGuessingBoxOpen, setIsGuessingBoxOpen } = useAppContext();
  const popularPlayers2005To2026 = [
    // --- Mid-2000s Legends ---
    "Ronaldinho",
    "Zinedine Zidane",
    "Thierry Henry",
    "Kaká",
    "Andriy Shevchenko",
    "Ronaldo Nazário",
    "Ruud van Nistelrooy",
    "Didier Drogba",
    "Wayne Rooney",
    "Steven Gerrard",
    "Frank Lampard",
    "Michael Ballack",
    "Andrea Pirlo",
    "Gianluigi Buffon",
    "Iker Casillas",
    "Fabio Cannavaro",
    "Carles Puyol",
    "Clarence Seedorf",
    "Samuel Eto'o",
    "Zlatan Ibrahimović",

    // --- 2010s Era Titans ---
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Neymar Jr.",
    "Andrés Iniesta",
    "Xavi Hernández",
    "Luka Modrić",
    "Toni Kroos",
    "Sergio Ramos",
    "Marcelo",
    "Dani Alves",
    "Gareth Bale",
    "Karim Benzema",
    "Luis Suárez",
    "Robert Lewandowski",
    "Sergio Agüero",
    "David Silva",
    "Eden Hazard",
    "Antoine Griezmann",
    "Thomas Müller",
    "Manuel Neuer",
    "Franck Ribéry",
    "Arjen Robben",
    "Mesut Özil",
    "Ángel Di María",
    "N'Golo Kanté",

    // --- Late 2010s to Early 2020s Stars ---
    "Kylian Mbappé",
    "Erling Haaland",
    "Mohamed Salah",
    "Kevin De Bruyne",
    "Virgil van Dijk",
    "Sadio Mané",
    "Harry Kane",
    "Bruno Fernandes",
    "Son Heung-min",
    "Thibaut Courtois",
    "Alisson Becker",
    "Casemiro",
    "Rodri",
    "Lautaro Martínez",
    "Paulo Dybala",

    // --- 2020s to 2026 Modern Era ---
    "Jude Bellingham",
    "Vinícius Júnior",
    "Lamine Yamal",
    "Jamal Musiala",
    "Florian Wirtz",
    "Bukayo Saka",
    "Phil Foden",
    "Cole Palmer",
    "Pedri",
    "Gavi",
    "Federico Valverde",
    "Trent Alexander-Arnold",
    "Martin Ødegaard",
    "Eduardo Camavinga",
    "Rodrygo Goes",
  ];
  const [playerName, setPlayerName] = useState("");
  const [areSuggestionsOpen, setAreSuggestionsOpen] = useState(true);
  return (
    <Dialog open={isGuessingBoxOpen} onOpenChange={setIsGuessingBoxOpen}>
      <DialogContent
        onClick={() => setAreSuggestionsOpen(false)}
        className="bg-[#1a1a1a] text-white px-6 sm:max-w-2/5 w-[95vw] h-1/2 max-h-[90vh] border-2 sm:border-3 border-zinc-700">
        <section className="py-5 relative">
          <div className="flex items-center gap-2">
            <h2 className="text-xl">Current Score: </h2>
            <p className="text-xl font-extrabold text-green-600">300</p>
          </div>
          {/* Hints */}
          <div className="my-4 space-y-4">
            <div className="flex items-center gap-2 bg-[#2f2f2f] rounded-md px-4 py-2">
              <Flag className="text-blue-500"/>
              <div>
                <p className="font-semibold opacity-65">Hint #1</p>
                <p>The player's country or club are revealed.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#2f2f2f] rounded-md px-4 py-2">
              <Footprints className="text-yellow-500"/>
              <div>
                <p className="font-semibold opacity-65">Hint #2</p>
                <p>The player's country or club are revealed.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#2f2f2f] rounded-md px-4 py-2">
              <Shirt className="text-purple-500"/>
              <div>
                <p className="font-semibold opacity-65">Hint #3</p>
                <p>The player's country or club are revealed.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 absolute bottom-0 left-0 right-0">
            {/* Search Suggestions */}
            {playerName.length > 0 && areSuggestionsOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="h-50 absolute overflow-y-auto bottom-12 right-0 left-0 rounded-md bg-[#2f2f2f] py-1.5 px-3 border border-[#4a4a4a]">
                {popularPlayers2005To2026
                  .filter((player) =>
                    player.toLowerCase().includes(playerName.toLowerCase()),
                  )
                  .map((player, index) => {
                    return (
                      <div
                        onClick={() => {
                          setPlayerName(player);
                          setAreSuggestionsOpen(false);
                        }}
                        className="bg-[#1a1a1a] rounded-md my-2 px-4 py-1.5 cursor-default hover:opacity-80"
                        key={index}>
                        {player}
                      </div>
                    );
                  })}
              </div>
            )}
            <input
              value={playerName}
              onChange={(e) => {
                setPlayerName(e.target.value);
                setAreSuggestionsOpen(true);
              }}
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
