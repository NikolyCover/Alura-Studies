import { Itask } from '../../types/task'
import Item from './item'
import style from './List.module.scss'

function List({tasks}: {tasks: Itask[]}) {

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