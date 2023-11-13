"use client"
import { Game } from '@/components/game/Game'
import { Header } from '@/components/header/Header'
import { Help } from '@/components/help/help'
import { Statistics } from '@/components/statistics/Statistics'
import { NEW_WORD_INTERVAL } from '@/const/settings'
import { WORDS } from '@/const/words'
import { useStatistics, useWordsPlayed } from '@/hooks/localStorage'
import { getRandomWord } from '@/utils/helpers'
import { useEffect, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'

export default function Home() {
  const [openHowToPlayModal, setOpenHowToPlayModal] = useState(false)
  const [answer, setAnswer] = useState(getRandomWord(WORDS));
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  const [nextGameTime, setNextGameTime] = useState(
    Date.now() + NEW_WORD_INTERVAL,
  );

  const { statistics, saveStatistics } = useStatistics();
  const { wordsPlayed, saveWordsPlayed } = useWordsPlayed();

  const restartGame = () => {
    setNextGameTime(Date.now() + NEW_WORD_INTERVAL);
    setAnswer(getRandomWord(WORDS));
  };

  useEffect(() => {
    if (answer) {
      saveWordsPlayed([...wordsPlayed, answer]);
      console.log('answer', answer)
    }
  }, [answer]);

  useEffect(() => {
    if (!statistics) {
      saveStatistics({ gamesPlayed: 0, gamesWon: 0 });
      setOpenHowToPlayModal(true);
    }
  }, [saveStatistics, statistics]);

  useEffect(() => {
    const interval = setInterval(() => {
      restartGame();
    }, NEW_WORD_INTERVAL);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[83px]">
      <div className="mx-auto my-0 flex min-w-full sm:min-w-[640px] flex-1 flex-col gap-1 p-8">
        <Header
          setIsHowToPlayModalOpen={(open: boolean) => setOpenHowToPlayModal(open)}
          setIsStatsModalOpen={() => setIsStatsModalOpen(true)}
        />
        <Game answer={answer} nextWords={() => restartGame()} setIsStatsModalOpen={setIsStatsModalOpen} />
        <Help isHowToPlayModalOpen={openHowToPlayModal} setIsHowToPlayModalOpen={setOpenHowToPlayModal} />
        <Statistics
          answer={answer} 
          isStatsModalOpen={isStatsModalOpen}
          setIsStatsModalOpen={setIsStatsModalOpen}
        >
          <Countdown
            date={nextGameTime}
            renderer={({ minutes, seconds }) => (
              <div>
                {zeroPad(minutes)}:{zeroPad(seconds)}
              </div>
            )}
          />
        </Statistics>
      </div>
    </main>
  )
}
