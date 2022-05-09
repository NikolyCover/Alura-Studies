import React from "react";
import style from './Watch.module.scss'

export default function Watch() {
    return (
        <React.Fragment>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerDivider}>:</span>
            <span className={style.timerNumber}>0</span>
            <span className={style.timerNumber}>0</span>
        </React.Fragment> 
    )
}