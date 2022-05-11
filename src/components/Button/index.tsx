import React from 'react'
import style from './Button.module.scss'

interface Props{
    children: React.ReactChild
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: () => void
}

class Button extends React.Component<Props> {
    render() {
        const {type = 'button', onClick} = this.props
        return (
            <button onClick={onClick} type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button