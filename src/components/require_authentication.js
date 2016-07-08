import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    
    
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }
    
    componentWillUpdate(nextProps, nextState) {
      // nextProps is the next set of props to be rendered
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }
    
    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
};

// This HOC will be used as such:
// import Authentication (HOC to be called many times with different components)
// import Resources (component to wrap)

// const ComposedComponent = Authentication(Resources);

// In render, we'll render <ComposedComponent />