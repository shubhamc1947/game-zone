import style from './index.module.css';


type HangmanWordProps = {
    guessedKey: string[];
    currWord: string;
    isReveal?: boolean;
}


const Hangmanword = ({ guessedKey, currWord, isReveal = false }: HangmanWordProps) => {

    return (
        <div className={style.currword}>
            {currWord.split("").map((letter, index) => {
                return (
                    <span className={style.wordbottom} key={index}>
                        <span style={{ visibility: guessedKey.includes(letter) || isReveal ? "visible" : "hidden", color: !guessedKey.includes(letter) && isReveal ? "red" : "var(--text-color)" }}


                        >{letter}</span>
                    </span>
                )
            })}
        </div >
    )
}
export default Hangmanword;