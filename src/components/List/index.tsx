import React from 'react'
import Item from './item'
import style from './List.module.scss'

function List() {
    const tasks = [
        {
        task: 'React',
        time: '02:00:00'
        },
        {
            task: 'Javascript',
            time: '01:00:00'
        },
        {
            task: 'Typescript',
            time: '03:00:00'
        }]

    return (
        <aside className={style['tasks-list']}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item
                        key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List