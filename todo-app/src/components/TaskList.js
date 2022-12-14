import React, { Fragment, useState } from 'react'
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';
import '../css/TaskList.css';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks]
      setTasks(taskUpdated);
    }
  };

  const deleteTask = (id) => {
    const tasksUpdated = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdated);
  };

  const completeTask = (id) => {
    const tasksUpdated = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(tasksUpdated);
  };

  return (
    <Fragment>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )
        }
      </div>
    </Fragment>
  );
}

export default TaskList;