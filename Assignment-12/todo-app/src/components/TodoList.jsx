import React from 'react';

const TodoList = React.memo(function TodoList({ title, list, renderActions }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {list.map((item) => (
        <div
          key={item.id}
          className="todo-item"
        >
          <span>{item.text}</span>
          <div>{renderActions(item.id)}</div>
        </div>
      ))}
    </div>
  );
});

export default TodoList;
