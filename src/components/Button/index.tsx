import React from 'react'
import style from './Button.module.scss'

interface Props{
    children: React.ReactChild
    type?: 'button' | 'submit' | 'reset' | undefined
}

class Button extends React.Component<Props> {
    render() {
        const {type = 'button'} = this.props
        return (
            <button type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button