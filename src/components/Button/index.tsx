import React from 'react'
import style from './Button.module.scss'

interface Props{
    children: React.ReactChild
}

class Button extends React.Component<Props> {
    render() {
        return (
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button