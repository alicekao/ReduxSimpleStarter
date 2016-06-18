import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// wrap specs in blocks so mocha can safely run all tests, qeues them up
// describe blocks group similar tests together
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
