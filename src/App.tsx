import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Pitch from "./components/Pitch";
import GamePanel from "./components/GamePanel";
import { CiCalendar } from "react-icons/ci";

import data from "./data/matches/el-clasico-2017";

function App() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-black text-white selection:bg-green-300 selection:text-green-900">
      <Header />
      <About />

      <div className="mx-auto max-w-[1800px] px-4 py-6">
        <div className="grid gap-6 xl:grid-cols-[2fr_1.2fr]">
          {/* Left Side */}
          <section className="rounded-2xl bg-[#1a1a1a] p-6 shadow-xl">
            {/* Match Information */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-center text-2xl font-bold">{data.title}</h2>

              <p className="flex items-center gap-2 text-sm text-neutral-400">
                <CiCalendar className="size-5" />
                {data.date}
              </p>

              {/* Scoreboard */}
              <div className="mt-3 grid w-full grid-cols-3 items-center">
                {/* Home */}
                <div className="flex items-center justify-end gap-3">
                  <h3 className="font-semibold">{data.teams.home.name}</h3>

                  <img
                    src={data.teams.home.logo}
                    alt={data.teams.home.name}
                    className="size-10 object-contain"
                  />
                </div>

                {/* Score */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl font-bold">
                    {data.teams.home.score}
                  </span>

                  <span className="text-xl text-neutral-500">-</span>

                  <span className="text-4xl font-bold">
                    {data.teams.away.score}
                  </span>
                </div>

                {/* Away */}
                <div className="flex items-center gap-3">
                  <img
                    src={data.teams.away.logo}
                    alt={data.teams.away.name}
                    className="size-10 object-contain"
                  />

                  <h3 className="font-semibold">{data.teams.away.name}</h3>
                </div>
              </div>
            </div>

            {/* Pitch */}
            <div className="mt-6">
              <Pitch
                players={data.pitch.players}
                hiddenPlayersData={data.hiddenPlayersData}
              />
            </div>
          </section>

          {/* Right Side */}
          <section>
            <GamePanel hiddenCount={data.hiddenPlayersData.length} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
