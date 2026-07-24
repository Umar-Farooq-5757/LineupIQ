import {
  CircleHelp,
  Trophy,
  Lightbulb,
  Goal,
  Footprints,
  Flag,
  Shirt,
  Map,
  Star,
  Medal,
  CheckCircle2,
} from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

export default function About() {
  const clueCards = [
    {
      icon: <Flag className="text-green-500" />,
      title: "Attempt 1",
      clue: "Nationality",
      description: "The player's country and flag are revealed.",
    },
    {
      icon: <Footprints className="text-yellow-500" />,
      title: "Attempt 2",
      clue: "Career Path",
      description:
        "Displays clubs the player has represented throughout their career.",
    },
    {
      icon: <Shirt className="text-purple-500" />,
      title: "Attempt 3",
      clue: "Shirt Number",
      description: "Reveals the shirt number worn in that specific match.",
    },
  ];

  return (
    <DialogContent className="sm:max-w-3xl w-[90vw] max-h-[85vh] overflow-y-auto p-0 bg-zinc-950 text-white border-3 border-white border-zinc-800">
      <main className="min-h-screen bg-zinc-950 text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800 px-10 py-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-black mt-6">
              Learn The Game In
              <span className="text-green-500"> 2 Minutes</span>
            </h1>
            <p className="mt-6 text-zinc-400 max-w-3xl leading-relaxed">
              Every day you'll be challenged with a famous football match. Some
              players have been hidden from the starting XI. Your objective is
              to identify every hidden player using the fewest clues possible.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-10 py-6">
          <h2 className="text-3xl font-bold mb-10">How A Puzzle Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="text-xl font-semibold mb-4">Daily Challenge</h3>
              <p className="text-zinc-400 leading-relaxed">
                Every puzzle is based on a real football match. You'll see:
              </p>
              <ul className="mt-5 space-y-3 text-zinc-300 list-inside">
                <li>Match title</li>
                <li>Teams & final score</li>
                <li>Formation</li>
                <li>Difficulty</li>
                <li>Football pitch</li>
                <li>Hidden players</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="text-xl font-semibold mb-4">Your Objective</h3>
              <p className="text-zinc-400 leading-relaxed">
                Identify every hidden player before revealing all of the clues.
                Every incorrect guess or clue reduces your final score.
              </p>
            </div>
          </div>
        </section>

        {/* Progressive Clues */}
        <section className="bg-zinc-900 border-y border-zinc-800 px-10 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Progressive Clues</h2>
            </div>
            <div className="">
              {clueCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                  {card.icon}
                  <h3 className="font-semibold mt-1">{card.title}</h3>
                  <div className="text-green-400 mt-1 font-medium">
                    {card.clue}
                  </div>
                  <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Match Information */}
        <section className="max-w-6xl mx-auto px-10 py-6">
          <h2 className="text-3xl font-bold mb-6">Match Information</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
              <h3 className="font-semibold text-xl">Before Playing</h3>
              <ul className="space-y-3 mt-5 text-zinc-400">
                <li>Match title</li>
                <li>Competition</li>
                <li>Final score</li>
                <li>Formation</li>
                <li>Difficulty</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
              <h3 className="font-semibold text-xl">During Game</h3>
              <ul className="space-y-3 mt-5 text-zinc-400">
                <li>Guess hidden players</li>
                <li>Unlock clues</li>
                <li>Search suggestions</li>
                <li>Track remaining players</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
              <h3 className="font-semibold text-xl">After Completion</h3>
              <ul className="space-y-3 mt-5 text-zinc-400">
                <li>Possession</li>
                <li>Shots on Target</li>
                <li>Man of the Match</li>
                <li>Football Trivia</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Score */}
        <section className="bg-zinc-900 border-y border-zinc-800 px-10 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold">Score System</h2>
            </div>
            <div className="rounded-2xl border border-zinc-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="px-6 py-4 text-left">Action</th>
                    <th className="px-6 py-4 text-right">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-zinc-800">
                    <td className="px-6 py-4">Correct Guess</td>
                    <td className="px-6 py-4 text-right text-green-400">
                      No Penalty
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-800">
                    <td className="px-6 py-4">Wrong Guess</td>
                    <td className="px-6 py-4 text-right text-red-400">
                      − Points
                    </td>
                  </tr>
                  <tr className="border-t border-zinc-800">
                    <td className="px-6 py-4">Reveal Clue</td>
                    <td className="px-6 py-4 text-right text-red-400">
                      − Points
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="max-w-6xl mx-auto px-10 py-6">
          <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="text-green-400" />
              <h2 className="text-3xl font-bold">Tips To Get A High Score</h2>
            </div>
            <ul className="space-y-5 text-zinc-300 leading-relaxed">
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
