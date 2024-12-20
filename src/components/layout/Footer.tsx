import style from "./style.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerwrap}>
                Made by Shubham ♥
            </div>
            <div>
                <a href="https://github.com/shubhamc1947/game-zone.git">Github</a>
            </div>
        </div >
    )
}

export default Footer;
