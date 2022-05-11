import React from "react";
import style from './Watch.module.scss'

interface Props {
    time: number | undefined
}

const Watch: React.FC<Props> = ({ time = 0 }) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minTens, minUnits] = String(minutes).padStart(2, '0')
    const [secTens, secUnits] = String(seconds).padStart(2, '0')

    return (
        <>
            <span className={style.timerNumber}>{minTens}</span>
            <span className={style.timerNumber}>{minUnits}</span>
            <span className={style.timerDivider}>:</span>
            <span className={style.timerNumber}>{secTens}</span>
            <span className={style.timerNumber}>{secUnits}</span>
        </> 
    )
}

export default Watch