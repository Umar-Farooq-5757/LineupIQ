import {
  Footprints,
  Flag,
  Shirt,
  CheckCircle2,
} from "lucide-react";
import { DialogContent } from "./ui/dialog";

export default function About() {
  const clueCards = [
    {
      icon: <Flag className="text-green-500 size-6" />,
      title: "Attempt 1",
      clue: "Nationality",
      description: "The player's country and flag are revealed.",
    },
    {
      icon: <Footprints className="text-yellow-500 size-6" />,
      title: "Attempt 2",
      clue: "Career Path",
      description:
        "Displays clubs the player has represented throughout their career.",
    },
    {
      icon: <Shirt className="text-purple-500 size-6" />,
      title: "Attempt 3",
      clue: "Shirt Number",
      description: "Reveals the shirt number worn in that specific match.",
    },
  ];

  return (
    <DialogContent className="sm:max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-zinc-950 text-white border-2 sm:border-3 border-zinc-700 rounded-lg">
      <main className="w-full bg-zinc-950 text-white text-sm">
        {/* Hero */}
        <section className="border-b border-zinc-800 px-4 sm:px-8 md:px-10 py-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-black mt-2 sm:mt-4">
              Learn The Game In
              <span className="text-green-500"> 2 Minutes</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-sm text-zinc-400 max-w-3xl leading-relaxed">
              Every day you'll be challenged with a famous football match. Some
              players have been hidden from the starting XI. Your objective is
              to identify every hidden player using the fewest clues possible.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-10 py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            How A Puzzle Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Daily Challenge
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Every puzzle is based on a real football match. You'll see:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300 list-disc list-inside">
                <li>Match title</li>
                <li>Teams & final score</li>
                <li>Formation</li>
                <li>Difficulty</li>
                <li>Football pitch</li>
                <li>Hidden players</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Your Objective
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Identify every hidden player before revealing all of the clues.
                Every incorrect guess or clue reduces your final score.
              </p>
            </div>
          </div>
        </section>

        {/* Progressive Clues */}
        <section className="bg-zinc-900 border-y border-zinc-800 px-4 sm:px-8 md:px-10 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Progressive Clues
              </h2>
            </div>
            {/* Clue cards in responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div>
                    {card.icon}
                    <h3 className="font-semibold text-base sm:text-lg mt-2">
                      {card.title}
                    </h3>
                    <div className="text-green-400 text-sm mt-1 font-medium">
                      {card.clue}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Match Information */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-10 py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            Match Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
              <h3 className="font-semibold text-lg sm:text-xl">Before Playing</h3>
              <ul className="space-y-2 mt-4 text-sm text-zinc-400">
                <li>Match title</li>
                <li>Competition</li>
                <li>Final score</li>
                <li>Formation</li>
                <li>Difficulty</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6">
              <h3 className="font-semibold text-lg sm:text-xl">During Game</h3>
              <ul className="space-y-2 mt-4 text-sm text-zinc-400">
                <li>Guess hidden players</li>
                <li>Unlock clues</li>
                <li>Search suggestions</li>
                <li>Track remaining players</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:p-6 sm:col-span-2 md:col-span-1">
              <h3 className="font-semibold text-lg sm:text-xl">After Completion</h3>
              <ul className="space-y-2 mt-4 text-sm text-zinc-400">
                <li>Possession</li>
                <li>Shots on Target</li>
                <li>Man of the Match</li>
                <li>Football Trivia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Score */}
        <section className="bg-zinc-900 border-y border-zinc-800 px-4 sm:px-8 md:px-10 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Score System
              </h2>
            </div>
            <div className="rounded-2xl border border-zinc-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold">
                      Action
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-right font-semibold">
                      Effect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-800">
                    <td className="px-4 sm:px-6 py-3 sm:py-4">Correct Guess</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right text-green-400 font-medium">
                      No Penalty
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-800">
                    <td className="px-4 sm:px-6 py-3 sm:py-4">Wrong Guess</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right text-red-400 font-medium">
                      − Points
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-800">
                    <td className="px-4 sm:px-6 py-3 sm:py-4">Reveal Clue</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right text-red-400 font-medium">
                      − Points
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-10 py-6 mb-4">
          <div className="rounded-2xl sm:rounded-3xl border border-green-500/20 bg-green-500/5 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <CheckCircle2 className="text-green-400 size-5 sm:size-6 shrink-0" />
              <h2 className="text-lg sm:text-2xl font-bold">
                Tips To Get A High Score
              </h2>
            </div>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed list-disc list-inside">
              <li>Study the formation before making your first guess.</li>
              <li>Use your football knowledge before revealing clues.</li>
              <li>Career path clues are often the most useful.</li>
              <li>Save the Heatmap clue as a last resort.</li>
              <li>
                After solving the puzzle, don't forget to read the match facts
                and trivia.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </DialogContent>
  );
}