import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> <Link to="/posts/new" className="pull-xs-right">New Post</Link>
        {this.props.children}
      </div>
    );
  }
}
