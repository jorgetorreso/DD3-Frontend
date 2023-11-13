"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { NUMBER_OF_CHART_BY_WORD_ALLOWED } from "@/const/settings";
import { useStatistics, useWrongWord } from "@/hooks/localStorage";
import { IWord } from "@/types/types";
import React, { useEffect, useState } from "react";
import { Keyboard } from "../keyboard/keyboard";
import { Board } from "../board/Board";
import { checkGuess } from "@/utils/helpers";
import { A_KEY_CODE, Z_KEY_CODE, defaultWords } from "@/const/words";

interface gameProps {
  answer: string
  nextWords: () => void;
  setIsStatsModalOpen: (isOpen: boolean) => void;
}

export const Game = ({ answer, nextWords, setIsStatsModalOpen }: gameProps) => {
  const [words, setWords] = useState<IWord[]>(defaultWords);
  const [attempts, setAttempts] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isWinner, setIsWinner] = useState(false);

  const isGameOver = isWinner || attempts === NUMBER_OF_CHART_BY_WORD_ALLOWED;
  const currentGuessPointer = attempts;

  const { statistics, saveStatistics } = useStatistics();
  const { saveWrongWord } = useWrongWord();

  const handleKeyPress = (key: string) => {
    if (isWinner || isGameOver) {
      return;
    }

    const word = currentWord.trimEnd();

    if (word.length < 5) {
      const value = `${word}${key}`;

      const currentGuesses = words.map((item) => {
        if (item.id === currentGuessPointer) {
          return { ...item, word: value.padEnd(5, " "), matches: [] };
        } else {
          return item;
        }
      });
      setCurrentWord(value);
      setWords(currentGuesses);
    }
  };

  const onEnter = () => {
    if (isWinner || isGameOver || !currentWord) {
      return;
    }

    const matches = checkGuess(currentWord, answer);

    const currentGuesses = words.map((guess) => {
      if (guess.id === currentGuessPointer) {
        return { ...guess, word: currentWord, matches };
      } else {
        return guess;
      }
    });

    setCurrentWord("");
    setWords(currentGuesses);
    setAttempts((prev) => prev + 1);

    if (currentGuesses.some((guess) => guess.word === answer)) {
      setIsWinner(true);
    } else {
      saveWrongWord(answer);
      if (currentGuessPointer < 5) {
        saveStatistics({
          ...statistics!,
          gamesPlayed: statistics!.gamesPlayed + 1,
        });
      }
      setIsStatsModalOpen(true);
      nextWords();
    }
  };

  const onDelete = () => {
    if (isWinner || isGameOver) {
      return;
    }

    const word = currentWord.trimEnd().slice(0, -1);

    const currentGuesses = words.map((guess) => {
      if (guess.id === currentGuessPointer) {
        return { ...guess, word: word.padEnd(5, " "), matches: [] };
      } else {
        return guess;
      }
    });

    setCurrentWord(word);
    setWords(currentGuesses);
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const keyCode = e.code;

      if (keyCode === "Enter") {
        onEnter();
      } else if (keyCode === "Backspace") {
        onDelete();
      } else {
        const key = e.key.toUpperCase();

        if (key.length === 1 && key.charCodeAt(0) >= A_KEY_CODE && key.charCodeAt(0) <= Z_KEY_CODE) {
          handleKeyPress(key);
        }
      }
    };

    window.addEventListener("keyup", listener);

    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [handleKeyPress, onEnter, onDelete]);

  useEffect(() => {
    const word = currentWord.trimEnd();

    if (word.length == 5) {
      onEnter();
    }
  }, [currentWord]);

  useEffect(() => {
    if (isWinner) {
      saveStatistics({
        gamesPlayed: Number(statistics?.gamesPlayed) + 1,
        gamesWon: Number(statistics?.gamesWon) + 1,
      });
      setIsStatsModalOpen(true);
      if (currentGuessPointer < 5) {
        nextWords();
        setIsWinner(false)
      };
    }

    if (isGameOver && !isWinner) {
      saveStatistics({
        ...statistics!,
        gamesPlayed: statistics!.gamesPlayed + 1,
      });
      setIsStatsModalOpen(true);
    }

  }, [isGameOver, isWinner]);

  return (
    <div>
      <div key={answer} className="mx-auto flex flex-1 flex-col gap-1 p-8">
        <Board currentWord={currentWord} words={words} />
      </div>
      <Keyboard
        onChar={handleKeyPress}
        onEnter={onEnter}
        onDelete={onDelete}
        words={words}
      />
    </div>
  );
};
