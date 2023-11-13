"use client"
import { QuestionIcon, StatsIcon } from "../svgs";
import Switcher from "../switcher/Switcher";

interface Props {
    setIsHowToPlayModalOpen: (isOpen: boolean) => void;
    setIsStatsModalOpen: (isOpen: boolean) => void;
}

export const Header = ({
    setIsHowToPlayModalOpen,
    setIsStatsModalOpen,
}: Props) => {

    return (
        <div className={`flex h-[84px] rounded-[15px] items-center justify-between  bg-[#F3F3F3] dark:bg-[#2c3141] px-[22px]`}>
            <button onClick={() => setIsHowToPlayModalOpen(true)}>
                <QuestionIcon className="h-6 w-6 text-gray-500 fill-[#243c5a] dark:fill-white" />
            </button>
            <h1 className="text-[#202537] dark:text-white text-3xl font-semibold leading-normal tracking-[3px]">
                WORDLE
            </h1>
            <div className="flex gap-3 items-center">
                <button onClick={() => setIsStatsModalOpen(true)}>
                    <StatsIcon className="h-6 w-6  fill-[#243c5a] dark:fill-white" />
                </button>
                <Switcher />
            </div>
        </div>
    );
};
