import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      todo: this.props.todo
    }
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  removeTodo(e) {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({editing: !this.state.editing});
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUpdate(e) {
    e.preventDefault();

    this.props.updateTodo(this.props.id, this.state.todo);

    this.setState({editing: false});
  }

  handleToggle(e) {
    this.props.toggleCompletion(this.props.id);
  }

  render() {
    let todoView;
    
    if(this.state.editing) {
      todoView = (
        <div className='Todo'>
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              name='todo'
              placeholder='Todo'
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <button>Update</button>
          </form>
        </div>
      )
    } else {
      todoView = (
        <div className="Todo">
          <li
            className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
            onClick={this.handleToggle}
          >
            {this.props.todo}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.removeTodo}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      )
    }
    return todoView;
  }
}

export default Todo;