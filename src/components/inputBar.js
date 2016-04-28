import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {newTodo: ''};
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onTodoSubmission}>
          <input
            value={this.state.newTodo}
            placeholder="Add a todo"
            onChange={event => this.setState({newTodo: event.target.value})} />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  }

  onTodoSubmission(event) {
    event.preventDefault();
    this.props.onTodoSubmission(this.state.newTodo);
  }
}

export default InputBar;
