import React from 'react';
import Todo from './toDo';

const TodoList = (props) => {
  const todoList = props.todos.map((todo) => {
    return <Todo name={todo} className="list-group-item" key={todo} />
  });

  return (
    <ul className="list-group">
      {todoList}
    </ul>
  );
  }

export default TodoList;
