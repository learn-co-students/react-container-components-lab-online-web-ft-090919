import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieReviews from '../src/components/MovieReviews';
import testReviews from './test-reviews';

Enzyme.configure({ adapter: new Adapter() })

const Noop = (props) => { return <p>Noop</p> };

function isStateless(Component) {
  return !Component.prototype.render;
}

describe('<MovieReviews />', () => {
  let wrapper;

  beforeEach(() => {
    if (!MovieReviews.prototype) {
      wrapper = shallow(<Noop />)
    } else {
      if (isStateless(MovieReviews)) {
        wrapper = shallow(<MovieReviews reviews={testReviews} />)
      } else {
        wrapper = mount(<MovieReviews reviews={testReviews} />)
      }
    }
  });

});
