import dynamic from "next/dynamic";
import React, { useCallback, useEffect } from "react";
import HangmanDraw from "../../componets/HangedmanDraw";
import HangmanKeyboard from "../../componets/HangmanKeyboard";
import HangmanWord from "../../componets/HangmanWord";
import words from "./assets/wordlists.json";
const Hangman = () => {
  const Word = dynamic(() => import("../../componets/HangmanWord"), {
    ssr: false,
  });

  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordToGuess, setWordToGuess] = React.useState(getWord);
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const incorrectletter = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const loser = incorrectletter.length >= 6;
  const winner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || winner || loser) return;

      setGuessedLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters, winner, loser]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      if (!key.match(/^[a-z]$/i)) return;

      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      if (key !== "Enter") return;

      event.preventDefault();
      setWordToGuess(getWord());
      setGuessedLetters([]);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {winner && "You won! - Refresh To Play Again"}
        {loser && "LOOOOOSEEERR! - Refresh To Play Again"}
      </div>
      <HangmanDraw numberOfGuesses={incorrectletter.length} />
      <Word
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={loser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          disabled={winner || loser}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={incorrectletter}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default Hangman;
