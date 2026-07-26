import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Pitch from "./components/Pitch";
import { CiCalendar } from "react-icons/ci";
import data from "./data/matches/el-clasico-2017";

function App() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-green-300 selection:text-green-900 pb-12">
      <Header />
      <About />

      {/* Responsive layout wrapper */}
      <div className="max-w-6xl mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6 items-start justify-center">
        {/* Main Pitch Card */}
        <section className="flex flex-col items-center w-full lg:max-w-xl bg-[#1a1a1a] py-6 px-4 sm:px-8 rounded-xl shadow-xl gap-6">
          {/* Match Info */}
          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="font-bold text-center text-lg sm:text-2xl px-2">
              {data.title}
            </h2>
            <p className="flex items-center text-xs sm:text-sm gap-2 font-semibold text-neutral-400">
              <CiCalendar className="size-4 sm:size-5" />
              {data.date}
            </p>

            {/* Scoreboard */}
            <div className="grid grid-cols-3 items-center justify-items-center w-full gap-2 mt-2">
              {/* Home Team */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-2 text-center sm:text-right w-full">
                <h3 className="font-semibold text-xs sm:text-sm leading-tight order-2 sm:order-1">
                  {data.teams.home.name}
                </h3>
                <img
                  className="size-8 sm:size-10 object-contain shrink-0 order-1 sm:order-2"
                  src={data.teams.home.logo}
                  alt={data.teams.home.name}
                />
              </div>

              {/* Final Score */}
              <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-extrabold px-3 py-1 rounded-lg">
                <span>{data.teams.home.score}</span>
                <span className="text-neutral-500 text-lg sm:text-xl">-</span>
                <span>{data.teams.away.score}</span>
              </div>

              {/* Away Team */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-2 text-center sm:text-left w-full">
                <img
                  className="size-8 sm:size-10 object-contain shrink-0"
                  src={data.teams.away.logo}
                  alt={data.teams.away.name}
                />
                <h3 className="font-semibold text-xs sm:text-sm leading-tight">
                  {data.teams.away.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Pitch Component */}
          <div className="w-full">
            <Pitch players={data.pitch.players} />
          </div>
        </section>

        {/* Rules Side Panel */}
        <section className="w-full lg:w-80 bg-[#1a1a1a] p-6 rounded-xl shadow-xl border border-neutral-800 shrink-0">
          <h3 className="text-lg font-bold mb-3 border-b border-neutral-700 pb-2">
            Rules & Score
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Click on any hidden player on the pitch to guess their identity!
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;