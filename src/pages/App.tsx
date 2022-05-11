import React, { useState } from 'react';
import Form from '../components/Form'
import List from '../components/List';
import Timer from '../components/Timer';
import { iTask } from '../types/task';
import style from './App.module.scss'

function App() {
  const [tasks, setTasks ] = useState<iTask[]>([])
  const [selected, setSelected] = useState<iTask>()

  function selectTask(selectedTask: iTask) {
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })
    ))
  }
    
  return (
    <div className={style.AppStyle}>
        <Form setTasks={setTasks}/>
        <List 
          tasks={tasks}
          selectTask = {selectTask}
          />
        <Timer selected={selected}/>
    </div>
  );
}

export default App;
