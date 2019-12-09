import React, {Component} from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  createTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  removeTodo(id) {
    let newTodos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({todos: newTodos});
  }

  updateTodo(id, newTodo) {
    let newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, todo: newTodo}
      }
      return {...todo}
    });

    this.setState({todos: newTodos});
  }

  toggleCompletion(id) {
    let newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return {...todo}
    });

    this.setState({todos: newTodos});
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        < Todo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          todo={todo.todo}
          toggleCompletion={this.toggleCompletion}
        />
      )
    });

    return (
      <div className="TodoList">
        <div className="TodoList-title">
          <h1>Todo React App</h1>
        </div>
        {todos.length > 0 && <ul>{todos}</ul>}
        < NewTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;