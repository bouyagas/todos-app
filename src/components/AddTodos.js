/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

const AddTodos = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todos ..."
          value={props.title}
          onChange={props.handleChange}
          style={{ flex: '10', padding: '5px' }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    </div>
  );
};

AddTodos.proptypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default AddTodos;
