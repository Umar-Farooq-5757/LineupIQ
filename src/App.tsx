// App.tsx
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Pitch from "./components/Pitch";
import GamePanel from "./components/GamePanel";
import { CiCalendar } from "react-icons/ci";
import { useGame } from "./context/GameContext";

function App() {
  const { currentMatch } = useGame();

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
              <h2 className="text-center text-2xl font-bold">
                {currentMatch.title}
              </h2>

              <p className="flex items-center gap-2 text-sm text-neutral-400">
                <CiCalendar className="size-5" />
                {currentMatch.date}
              </p>

              {/* Scoreboard */}
              <div className="mt-3 grid w-full grid-cols-3 items-center">
                {/* Home */}
                <div className="flex items-center justify-end gap-3">
                  <h3 className="font-semibold">
                    {currentMatch.teams.home.name}
                  </h3>

                  <img
                    src={currentMatch.teams.home.logo}
                    alt={currentMatch.teams.home.name}
                    className="size-10 object-contain"
                  />
                </div>

                {/* Score */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl font-bold">
                    {currentMatch.teams.home.score}
                  </span>

                  <span className="text-xl text-neutral-500">-</span>

                  <span className="text-4xl font-bold">
                    {currentMatch.teams.away.score}
                  </span>
                </div>

                {/* Away */}
                <div className="flex items-center gap-3">
                  <img
                    src={currentMatch.teams.away.logo}
                    alt={currentMatch.teams.away.name}
                    className="size-10 object-contain"
                  />

                  <h3 className="font-semibold">
                    {currentMatch.teams.away.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Pitch */}
            <div className="mt-6">
              <Pitch
                players={currentMatch.pitch.players}
                hiddenPlayersData={currentMatch.hiddenPlayersData}
              />
            </div>
          </section>

          {/* Right Side */}
          <section>
            <GamePanel trivia={currentMatch.matchFacts.trivia} hiddenCount={currentMatch.hiddenPlayersData.length} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
