

"use client"
import Modal from "../modal/modal";
import { useStatistics, useWrongWord } from "@/hooks/localStorage";

interface StatisticsProps {
  answer: string | null,
  children: React.ReactNode;
  isStatsModalOpen: boolean;
  setIsStatsModalOpen: (isOpen: boolean) => void;
}

export const Statistics = ({
  answer,
  children,
  isStatsModalOpen,
  setIsStatsModalOpen,
}: StatisticsProps) => {
  const { statistics } = useStatistics();
  const { clearWrongWord, wrongWord } = useWrongWord()

  return (
    <Modal
      isOpen={isStatsModalOpen}
      handleClose={() => setIsStatsModalOpen(false)}
    >
      <div className="text-center pt-[54px] pb-[32px]">
        <h3 className="text-4xl font-black text-gray-900 dark:text-white" >
          Estadísticas
        </h3>
      </div>
      <div className="flex flex-col gap-8 text-gray-900 dark:text-white">
        <div className="mx-16 flex justify-between">
          <div className="block text-center">
            <h1 className="text-4xl font-extrabold">
              {statistics?.gamesPlayed}
            </h1>
            <span className="text-xl">Jugadas</span>
          </div>
          <div className="block text-center">
            <h1 className="text-4xl font-extrabold">{statistics?.gamesWon}</h1>
            <span className="text-xl">Victorias</span>
          </div>
        </div>
        {wrongWord && <div className="sapce-y-2 block text-center">
          <div className="text-[19px]">La palabra era: <b className="font-semibold">{wrongWord}</b></div>
        </div>}
        <div className="sapce-y-2 block text-center">
          <div className="text-[19px]">SIGUIENTE PALABRA</div>
          <span className="text-xl font-semibold">{children}</span>
        </div>
        <div className="flex  min-h-full items-center justify-center pb-[44px]">
          <button
            className="rounded-md bg-[#66A060] px-14 py-2 text-xl font-semibold text-white"
            onClick={() => {
              clearWrongWord();
              setIsStatsModalOpen(false)
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  );
};
