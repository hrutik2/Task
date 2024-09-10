import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './Redux/action';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => dispatch(deleteTask(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
