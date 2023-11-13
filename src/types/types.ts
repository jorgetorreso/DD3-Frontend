export type Status = "" | "correct" | "incorrect" | "misplaced";

export interface IGuess {
  id: number;
  word: string;
  matches: Array<{
    letter: string;
    status: Status;
  }>;
}

export type IWordMatches = {
  letter: string;
  status: Status;
};
export interface IWord {
  id: number;
  word: string;
  matches: IWordMatches[];
}

export interface Statistics {
  gamesPlayed: number;
  gamesWon: number;
}
