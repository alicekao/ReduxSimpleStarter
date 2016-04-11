// Containers form the bridge between react views and redux data states using react-redux library. Aka smart components. Makes components aware of the Redux state.
// Make a component into a container when it cares about a piece of state changing (the most parent)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// Makes sure selectBook flows through our app
import { bindActionCreators } from 'redux';

class BookList extends Component {
  // Helper fn that creates a list item in the passed in books array
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This is the glue - Takes in application state
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  }
}

// Anything returned from this fn will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// Export the container
// Connect takes a fn and a component to make a container that is aware of the state
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
