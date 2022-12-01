import React, { useState } from 'react';
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {

  const [input, setInput] = useState('');

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const sendHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  };

  return (
    <form className='task-form' onSubmit={sendHandler}>
      <input
        className='task-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={changeHandler}
      />
      <button className='task-button'>
        Agregar tarea
      </button>
    </form>
  );
}

export default TaskForm;