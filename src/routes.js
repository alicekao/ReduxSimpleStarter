// Mapping of url to components
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// App is the root component
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  // When user is at root path, show App component
  // Nested routes will show up in App as this.props.children
  // IndexRoute gets shown only if on exact parent route
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

// this.props.params.id
