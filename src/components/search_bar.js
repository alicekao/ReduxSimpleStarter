import React, { Component } from 'react';

class SearchBar extends Component {
  // Constructor is called upon a new instantiation
  // Handles setup, initalizes vars, state, etc
  constructor(props) {
    // Comes from the Component methods
    super(props);
    // Need to initialize a new obj with properties we want to record on the state
    // Term will have the current input value
    // Only inside constructor can state be modified
    this.state = { term: ''};
  }

  render() {
    // setState helps remain continuity, only way for React to know state is changing, it re renders every change
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // Set state and fire off cb fn
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
