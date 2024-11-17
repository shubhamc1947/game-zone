import { useCallback, useEffect, useState } from 'react';
import HangmanDrawing from './HangmanDrawing';
import Hangmanword from './HangmanWord';
import style from './index.module.css';
import Keyboard from './Keyboard';

import { WORDS as words } from './data';


const getNewWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

const Hangman = () => {
    const [currWord, setCurrWord] = useState(getNewWord)

    const [guessedKey, setGuessKey] = useState<string[]>([]);;


    const wrongGuess = guessedKey.filter((letter) => !currWord.includes(letter));
    // console.log(wrongGuess + " All the wrong guesses");
    // console.log(guessedKey + " All the guess wrong and right");



    const isLooser = wrongGuess.length >= 6;
    const isWinner = currWord.split("").every((letter) => guessedKey.includes(letter));



    const addGuessLetter = useCallback((letter: string) => {
        if (guessedKey.includes(letter) || isWinner || isLooser) {
            //dublicate guess
            // toast.warn(`Already Guessed  "${letter}"`, {
            //   position: "bottom-right"
            // });
            return;
        } else if (currWord.includes(letter)) {
            //right guess
            // toast.success(`Right letter  "${letter}"`, {
            //   position: "top-left",
            // });
        } else {
            //wrong guess
            // toast.error(`Wrong letter  "${letter}"`);
        }
        setGuessKey(prev => [...prev, letter]);
    }, [guessedKey, currWord, isLooser, isWinner])





    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            e.preventDefault();
            const key: string = e.key.toUpperCase();
            if (!key.match(/^[A-Z]$/)) return;
            addGuessLetter(key);
        }
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [addGuessLetter])


    // replay logic
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key !== "Enter") {
                return;
            }
            e.preventDefault();
            setCurrWord(getNewWord())
            setGuessKey([]);
        }
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])



    return (
        < div className={style.wrapper} >

            <div className={style.left}>
                <div className={style.msg}>
                    {isLooser && " Looser : Press Enter and replay"}
                    {isWinner && " Winner : Press Enter and replay"}
                </div>

                <HangmanDrawing wrongGuessCount={wrongGuess.length} />

            </div>
            <div className={style.right}>
                <Hangmanword isReveal={isLooser} currWord={currWord} guessedKey={guessedKey} />

                {/* keyboard needs all correct letters , incorrect letter and onclick btn , it needs the adding function  */}
                <Keyboard disabled={isLooser || isWinner} activeLetters={guessedKey.filter((curr) => currWord.includes(curr))} inactiveLetters={wrongGuess} addGuessLetter={addGuessLetter} />

            </div>
        </div >
    )
}

export default Hangman; 