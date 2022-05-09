import Button from "../Button";
import Watch from "./Watch";
import style from './Timer.module.scss'

export default function Timer() {
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.timerWrapper}>
                <Watch/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}