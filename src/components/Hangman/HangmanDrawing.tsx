import style from './index.module.css';
const HEAD = (
    <div className={style.head}></div>
)
const NECK = (
    <div className={style.neck}></div>
)
const RIGHTARM = (
    <div className={style.rightarm}></div>
)
const LEFTARM = (
    <div className={style.leftarm}></div>
)
const RIGHTLEG = (
    <div className={style.rightleg}></div>
)
const LEFTLEG = (
    <div className={style.leftleg}></div>
)

const BODYPART = [HEAD, NECK, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG]


type HangmanDrawingProps = {

    wrongGuessCount: number;
}


const HangmanDrawing = ({ wrongGuessCount }: HangmanDrawingProps) => {

    return <div className={style.hangman}>
        {
            BODYPART.slice(0, wrongGuessCount).map((curr, idx) => <div key={idx}>{curr}</div>)
        }
        <div className={style.rope}></div>
        <div className={style.rod}></div>
        <div className={style.piller}></div>
        <div className={style.base}></div>
    </div>
}
export default HangmanDrawing;