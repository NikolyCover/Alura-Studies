import { iTask } from '../../types/task'
import Item from './item'
import style from './List.module.scss'

interface Props {
    tasks: iTask[],
    selectTask: (selectedTask: iTask) => void
}

function List({tasks, selectTask}: Props) {

    return (
        <aside className={style['tasks-list']}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectTask = {selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List