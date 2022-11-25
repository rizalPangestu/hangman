// import "./styles.css";
import styles from "../../styles/hangman.module.css";
const KEYBOARD = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface keyboardPress {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
}

const HangmanKeyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
  disabled,
}: keyboardPress) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".25em",
      }}
    >
      {KEYBOARD.map((letter, index) => {
        const isActive = activeLetter.includes(letter);
        const isInactive = inactiveLetter.includes(letter);
        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ""} `}
            key={index}
            onClick={() => addGuessedLetter(letter)}
            disabled={isActive || isInactive || disabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
