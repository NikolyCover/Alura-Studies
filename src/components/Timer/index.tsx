import Button from "../Button";
import Watch from "./Watch";
import style from './Timer.module.scss'
import { timeToSeconds } from "../../common/utils/date";
import { iTask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
    selected: iTask | undefined
}

export default function Timer({selected}: Props) {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function startCountdown(counter = 0) {
        console.log('oi')
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1)
                return startCountdown(counter - 1)
            }
        }, 1000)
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.timerWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => startCountdown(time)}>Começar!</Button>
        </div>
    )
}