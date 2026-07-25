import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Pitch from "./components/Pitch";
import { Dialog } from "./components/ui/dialog";
import { CiCalendar } from "react-icons/ci";
import data from "./data/matches/ucl-2015-final";

function App() {
  return (
    <Dialog>
      <main className="bg-black min-h-screen text-white overflow-x-hidden">
        <Header />
        <About />

        <section className="flex flex-col items-center justify-center gap-6 mt-4 bg-[#1a1a1a] py-3">
          <div className="flex flex-col items-center gap-2 w-full max-w-2xl mx-auto">
            <h2 className="font-bold text-center text-lg sm:text-xl px-2">
              {data.title}
            </h2>
            <p className="flex items-center text-xs sm:text-sm gap-2 font-semibold opacity-70">
              <CiCalendar className="size-4 sm:size-4.5" />
              {data.date}
            </p>
            <div className="grid grid-cols-3 items-center justify-items-center w-full max-w-lg gap-2">
              {/* Home team */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2 text-center sm:text-right w-full">
                <h1 className="font-semibold text-sm sm:text-base leading-tight">
                  {data.teams.home.name}
                </h1>
                <img
                  className="size-8 sm:size-10 object-contain shrink-0"
                  src={data.teams.home.logo}
                  alt={data.teams.home.name}
                />
              </div>

              {/* Final scores */}
              <div className="flex items-center justify-center gap-1.5 text-2xl sm:text-3xl font-bold">
                <span>{data.teams.home.score}</span>
                <span className="opacity-50 text-xl sm:text-2xl">-</span>
                <span>{data.teams.away.score}</span>
              </div>

              {/* Away team */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-2 text-center sm:text-left w-full">
                <img
                  className="size-8 sm:size-10 object-contain shrink-0"
                  src={data.teams.away.logo}
                  alt={data.teams.away.name}
                />
                <h1 className="font-semibold text-sm sm:text-base leading-tight">
                  {data.teams.away.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Pitch Component */}
          <div className="w-full">
            <Pitch players={data.pitch.players} />
          </div>
        </section>
      </main>
    </Dialog>
  );
}

export default App;