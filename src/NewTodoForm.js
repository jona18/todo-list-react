import React, {Component} from 'react';
import './NewTodoForm.css';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTodo = {...this.state, id: uuid(), completed: false}

    this.props.createTodo(newTodo);

    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='todo'>New todo </label>
          <div className="input-button">
            <input
            name='todo'
            id='todo'
            placeholder='New todo'
            value={this.state.todo}
            onChange={this.handleChange}          
            />
            <button>ADD TODO</button>
          </div>
        </form>  
      </div>
    );
  }
}

export default NewTodoForm;