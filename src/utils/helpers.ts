import { Status } from "@/types/types";

export const getColorByStatus = (status: Status, isKey = false) => {
  if (status === "correct") {
    return "bg-[#66A060]";
  } else if (status === "incorrect") {
    return "bg-[#939B9F]";
  } else if (status === "misplaced") {
    return "bg-[#CEB02C]";
  } else {
    return `bg-[#DADDDE] dark:${isKey ? "bg-[#939B9F]" : "bg-[#939B9F]"}`;
  }
};

export const getRandomWord = (arr: string[]) => {
  let word = "";
  let tries = 0;

  const storage = localStorage.getItem("words");
  const wordsPlayed = storage ? JSON.parse(storage) : [];

  while (word === "" && tries <= arr.length - 1) {
    word = arr[Math.floor(Math.random() * arr.length)];
    if (wordsPlayed.includes(word)) {
      word = "";
      tries += 1;
    }
  }

  if (tries === arr.length) {
    return "";
  }

  return word.toUpperCase();
};

export const checkGuess = (guess: string, answer: string) => {
  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = "correct";
    } else if (answerChars.includes(guessChar)) {
      status = "misplaced";
    } else {
      status = "incorrect";
    }

    return {
      letter: guessChar,
      status,
    };
  }) as Array<{ letter: string; status: Status }>;
};

export const isEmpty = (variable: any): boolean => {
  return variable === undefined || variable === null || variable === '';
};