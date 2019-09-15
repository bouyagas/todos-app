/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import axios from 'axios';
// import uuidv4 from 'uuid/v4';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/pages/About';
import Header from './components/layout/Header';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: '',
    };

    this.markComplete = this.markComplete.bind(this);
    this.delTodos = this.delTodos.bind(this);
    this.AddTodos = this.AddTodos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete(id) {
    this.setState({
      squad: this.state.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    });
  }

  delTodos(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [
          ...this.state.todos.filter(item => {
            return item.id !== id;
          }),
        ],
      }),
    );
  }

  AddTodos(title) {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.AddTodos(this.state.title);
    this.setState({ title: '' });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodos
                    title={this.state.title}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                  />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodos={this.delTodos}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
