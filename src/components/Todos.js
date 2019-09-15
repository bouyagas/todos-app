/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import TodosItem from './TodosItem';

export default class Todos extends Component {
  render() {
    const myTodos = this.props.todos.map(todo => (
      <TodosItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodos={this.props.delTodos}
      />
    ));
    return <div>{myTodos}</div>;
  }
}
