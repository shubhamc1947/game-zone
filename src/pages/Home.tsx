import { Link } from 'react-router-dom';
import style from './style.module.css'
const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.homewrap}>
                <div className={style.game}>
                    <Link to="/game/hangman"> HANGMAN</Link>
                </div>
            </div>
        </div>
    )
}
export default Home;