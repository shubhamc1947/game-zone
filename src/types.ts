import { ReactNode } from "react";

export type PropsGuessedWord = {
  guessedWord: string[];
  setGuessedWord: React.Dispatch<React.SetStateAction<string[]>>;
};

export type PropsHangmanWord = PropsGuessedWord & {
  currWord: string;
};

export type GameContextType = {
  wrongGuessCount: number;
  setWrongGuessCount: React.Dispatch<React.SetStateAction<number>>;
};

export type GameContextProviderType = {
  children: ReactNode;
};
