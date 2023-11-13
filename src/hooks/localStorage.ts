import { Statistics } from "@/types/types";

const STATS_KEY = "statistics";
const WORDS_KEY = "words";
const WRONG_WORD_KEY = "wrong_word";

export const useStatistics = () => {
  const saveStatistics = (statistics: Statistics): void => {
    localStorage.setItem(STATS_KEY, JSON.stringify(statistics));
  };

  const getStats = (): Statistics | null => {
    const statistics = localStorage.getItem(STATS_KEY);

    return statistics ? (JSON.parse(statistics) as Statistics) : null;
  };

  return {
    saveStatistics,
    statistics: getStats(),
  };
};

export const useWordsPlayed = () => {
  const saveWordsPlayed = (words: Array<string>): void => {
    localStorage.setItem(WORDS_KEY, JSON.stringify(words));
  };

  const getWordsPlayed = (): Array<string> => {
    const words = localStorage.getItem(WORDS_KEY);

    return words ? (JSON.parse(words) as Array<string>) : [];
  };

  return {
    saveWordsPlayed,
    wordsPlayed: getWordsPlayed(),
  };
};

export const useWrongWord = () => {
  const saveWrongWord = (word: string): void => {
    localStorage.setItem(WRONG_WORD_KEY, word);
  };

  const getWrongWord = (): string | null => {
    const word = localStorage.getItem(WRONG_WORD_KEY);

    return word ? word : null;
  };

  const clearWrongWord= () =>{
    localStorage.removeItem(WRONG_WORD_KEY);
  }

  return {
    clearWrongWord,
    saveWrongWord,
    wrongWord: getWrongWord(),
  };
};
