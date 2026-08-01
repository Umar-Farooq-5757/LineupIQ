import { useEffect, useState } from "react";
import { ArrowRight, Crosshair, Trophy } from "lucide-react";

import anonymousImage from "@/data/images/players/anonymous.webp";
import { useGame } from "@/context/GameContext";

import ProgressCard from "./ProgressCard";
import ScoreCard from "./ScoreCard";
import SearchBox from "./SearchBox";
import HintList from "./HintList";
import GameCompleteModal from "./GameCompleteModal";

interface Props {
  hiddenCount: number;
  trivia:string;
}

export default function GamePanel({ hiddenCount,trivia }: Props) {
  const {
    selectedPlayer,
    foundPlayers,
    score,
    guesses,
    wrongGuesses,
    revealedHints,
    resetGame,
    nextLevel,
    hasNextLevel,
    isMatchCompleted,
  } = useGame();

  const remaining = hiddenCount - foundPlayers.length;

  const hintsUsed = Object.values(revealedHints).reduce(
    (sum, value) => sum + value,
    0,
  );

  const completed = foundPlayers.length === hiddenCount;

  const [showCompleteModal, setShowCompleteModal] = useState(false);

  useEffect(() => {
    if (completed) {
      setShowCompleteModal(true);
    }
  }, [completed]);

  function playAgain() {
    setShowCompleteModal(false);
    resetGame();
  }

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-1">
        {/* Current Target */}
        <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#1a1a1a] shadow-lg">
          <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-4">
            <Crosshair className="size-5 text-green-400" />
            <h2 className="text-lg font-semibold">Current Target</h2>
          </div>

          {!selectedPlayer ? (
            <div className="px-5 py-10 text-center">
              <h3 className="text-lg font-semibold">Select a hidden player</h3>

              <p className="mt-2 text-sm text-neutral-400">
                Click a hidden player on the pitch to start guessing.
              </p>
            </div>
          ) : (
            <div className="p-6">
              <div className="flex justify-center">
                <img
                  src={anonymousImage}
                  alt=""
                  className="size-24 rounded-full border-4 border-amber-400"
                />
              </div>

              <div className="mt-5 text-center">
                <p className="text-xs uppercase tracking-widest text-neutral-400">
                  Position
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {selectedPlayer.identity.position}
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-neutral-900 p-4">
                <div>
                  <p className="text-xs uppercase text-neutral-500">
                    Remaining
                  </p>

                  <p className="mt-1 text-2xl font-bold">{remaining}</p>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase text-neutral-500">
                    Difficulty
                  </p>

                  <p className="mt-1 font-semibold text-amber-400">Hidden</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <ScoreCard />

        <ProgressCard total={hiddenCount} />

        {selectedPlayer && <SearchBox />}

        {selectedPlayer && <HintList />}
        <div className="flex flex-col gap-4">
          {/* If puzzle is complete, show Next Level button directly in the side panel */}
          {isMatchCompleted && (
            <button
              onClick={nextLevel}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-bold text-black transition hover:bg-green-400">
              <span>Continue to Next Level</span>
              <ArrowRight size={18} />
            </button>
          )}

          {/* Rest of your GamePanel component */}
        </div>
        <section className="rounded-2xl border border-neutral-800 bg-[#1a1a1a] p-5 shadow-lg">
          <div className="flex items-center gap-2">
            <Trophy className="size-5 text-yellow-400" />

            <h3 className="font-semibold">Goal</h3>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            Identify every hidden player while using as few hints and guesses as
            possible. Finish with the highest score.
          </p>
        </section>
      </div>

      <GameCompleteModal
        open={showCompleteModal}
        onOpenChange={setShowCompleteModal}
        score={score}
        guesses={guesses}
        wrongGuesses={wrongGuesses}
        hintsUsed={hintsUsed}
        onPlayAgain={playAgain}
        onNextLevel={() => {
          nextLevel();
          setShowCompleteModal(false);
        }}
        hasNextLevel={hasNextLevel}
        trivia={trivia}
      />
    </>
  );
}
