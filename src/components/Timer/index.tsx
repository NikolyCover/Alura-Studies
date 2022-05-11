import Button from "../Button";
import Watch from "./Watch";
import style from './Timer.module.scss'
import { timeToSeconds } from "../../common/utils/date";
import { iTask } from "../../types/task";
import { useState } from "react";

interface Props {
    selected: iTask | undefined
}

export default function Timer({selected}: Props) {
    
    const [time, setTime] = useState<number>()

    if(selected?.time) {
        setTime(timeToSeconds(selected.time))
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            Tempo: {time}
            <div className={style.timerWrapper}>
                <Watch/>
            </div>
            <Button>Começar!</Button>
        </div>
    )
}