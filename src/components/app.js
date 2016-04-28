import React from 'react';
import { Component } from 'react';

import InputBar from './inputBar';
import TodoList from './todoList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {list: ['Groceries', 'Laundry', 'Clean']};
  }

  addToList(toAdd) {
    console.log(toAdd);
    // this.setState({list: this.state.list.concat([toAdd])});
  }

  render() {
    return (
      <div>
        <InputBar onTodoAddition={todo => this.addToList(todo)}/>
        <h3>To Do:</h3>
        <TodoList todos={this.state.list}/>
      </div>
    );
  }
}
