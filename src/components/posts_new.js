import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  // Defines an obj on PostsNew to give access to the context of router elem
  // only use context with router
  // this.context.router
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate user to index
        // We navigate by calling this.context.router.push w new path
        // to navigate to
        this.context.router.push('/');
      });
  }

  render() {
    // Same as const handleSubmit = this.props.handleSubmit
    // and const title = this.props.fields.title
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      // redux form will call our action creator with form contents
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}` }>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}` }>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}` }>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  // if errs obj has a truthy key matching the form field,
  // redux form invalidates form
  return errors;
}

//connect: first arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first arg is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
// state === {
  // form: {
    // PostsNewForm: {
      // title: '..',
      // categories: '..',
      // content: '..'
    // }
  // }
// }
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
