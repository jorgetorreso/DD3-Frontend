"use client"
import { NUMBER_OF_CHART_BY_WORD_ALLOWED } from "@/const/settings";
import { IWord } from "@/types/types";
import { getColorByStatus, isEmpty } from "@/utils/helpers";

interface BoardProps {
  currentWord: string;
  words: IWord[];
}

export const Board = ({ words }: BoardProps) => {
  return (
    <div className="flex flex-1 flex-col justify-center gap-[11px]">
      {words.map((item) => {
        const itemWord = !isEmpty(item.word) ? item.word : "".padStart(NUMBER_OF_CHART_BY_WORD_ALLOWED, ' ');
        return (
          // @ts-ignore
          <p key={item.id} className="mb-1 flex gap-[11px]">
            {itemWord.split("").map((char, index) => {
              const status = item.matches[index]?.status;
              const bgColor = getColorByStatus(status);

              return (
                <span
                  key={index}
                  className={`relative ${bgColor} grid aspect-square w-[20%] place-content-center rounded-md text-4xl font-extrabold text-white`}
                >
                  {char}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};
