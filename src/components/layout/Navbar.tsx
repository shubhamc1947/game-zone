import { useEffect } from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../context/Theme';
const Navbar = () => {
    const { theme, toggleTheme } = useThemeContext();

    useEffect(() => {
        document.body.className = theme; // Set the class on the body
    }, [theme]);


    return (
        <div className={style.navbar}>
            <div className={style.navbarwrap}>
                <div className='left'>
                    <Link to={"/"}>HOME</Link >
                </div>
                <div className="right">
                    <button onClick={toggleTheme}>Dark</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;