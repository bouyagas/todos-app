/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

const TodosItem = props => {
  const { title, completed, id } = props.todo;

  const getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  const btnStyle = () => {
    return {
      backgroundColor: '#ff0000',
      color: '#ffffff',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right',
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{' '}
        {''}
        {title}
        <button onClick={props.delTodos.bind(this, id)} style={btnStyle()}>
          x
        </button>
      </p>
    </div>
  );
};

TodosItem.proptypes = {
  squad: PropTypes.object.isRequired,
};

export default TodosItem;
