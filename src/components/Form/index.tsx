import React from 'react'
import { iTask } from '../../types/task'
import Button from '../Button'
import style from './Form.module.scss'
import { v4 as uuidv4} from 'uuid'

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<iTask[]>>
}> {
    state = {
        task: '',
        time: '00:00'
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTasks(oldTasks => 
            [
                ...oldTasks,
                {
                    ...this.state,
                    selected: false,
                    completed:false,
                    id: uuidv4()
                }
            ]
        )
        this.setState({
            task: '',
            time: '00-00-00'
        })
    }

    render() {
        return (
            <form className={style['new-task']} onSubmit={this.addTask.bind(this)}>
                <div className={style.field}>
                    <label className={style.field__tittle} htmlFor='task'>
                        Adicione um novo estudo
                    </label>
                    <input
                        className={style.field__input}
                        type='text'
                        name='task'
                        id='task'
                        value={this.state.task}
                        onChange={event => this.setState({...this.state, task: event.target.value})}
                        placeholder='O que você quer estudar'
                        required
                    />
                </div>
                <div className={style.field}>
                    <label className={style.field__tittle}   htmlFor='time'>
                        Tempo
                    </label>
                    <input
                        className={style.field__input}
                        type='time'
                        step='1'
                        name='time'
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        id='time'
                        min='00:00:00'
                        max='02:00:00'
                        required
                    />
                </div>
                <Button type='submit'>Adicionar</Button>
            </form>
        )
    }
}

export default Form