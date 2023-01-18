import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      this.setState({ todos });
    } catch (err) {
      console.error('There was an error', err);
    }
  }

  async addTodo(newTodo) {
    const body = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };
    try {
      const response = await fetch('/api/todos', body);
      const todo = await response.json();
      const todosCopy = await [...this.state.todos];
      const newArray = await todosCopy.concat(todo);
      this.setState({
        todos: newArray
      });
    } catch (err) {
      console.error('There was an error!', err);
    }
  }

  async toggleCompleted(todoId) {
    const todosList = this.state.todos;
    let index;
    for (let i = 0; i < todosList.length; i++) {
      if (todosList[i].todoId === todoId) {
        index = i;
        break;
      }
    }
    const status = todosList[index].isCompleted;
    const statusObject = {
      isCompleted: !status
    };
    const body = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(statusObject)
    };
    try {
      const response = await fetch(`/api/todos/${todoId}`, body);
      const update = await response.json();
      const todosCopy = [...this.state.todos];
      todosCopy[index] = await update;
      this.setState({
        todos: todosCopy
      });
    } catch (err) {
      console.error('There was an error!', err);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
