import style from './index.module.css';

import { KEYS } from './data';

type KeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessLetter: (letter: string) => void;
    disabled?: boolean;
}


const Keyboard = ({ activeLetters, inactiveLetters, addGuessLetter, disabled = false }: KeyboardProps) => {
    // console.log(activeLetters + " right guess letters")
    // console.log(inactiveLetters + " wrong letters")
    return (

        <div className={style.keyboardwrap} >
            <div className={style.keyboard}>
                {KEYS.map((key) => {
                    const isActive = activeLetters.includes(key.toUpperCase());
                    const isInActive = inactiveLetters.includes(key.toUpperCase());
                    return (
                        <button className={`${style.keyboardbtn} 
                            ${isActive ? style.active : ''}
                            ${isInActive ? style.inactive : ''}
                            `} key={key}
                            disabled={isActive || isInActive || disabled}
                            onClick={() => addGuessLetter(key.toUpperCase())}
                        >
                            {key}
                        </button>
                    )
                })}
            </div>
        </div >

    )
}

export default Keyboard;