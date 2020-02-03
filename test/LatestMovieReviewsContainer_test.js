import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LatestMovieReviewsContainer from '../src/components/LatestMovieReviewsContainer';
import testReviews from './test-reviews';

import { spy, stub, useFakeTimers } from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

const Noop = (props) => { return <p>Noop</p> };

describe('<LatestMovieReviewsContainer />', () => {
  let wrapper;
  let fetchSpy;

  beforeEach(() => {
    global.fetch = require('node-fetch')

    fetchSpy = spy(global, "fetch")

    wrapper = !LatestMovieReviewsContainer.prototype ?
      shallow(<Noop />) : shallow(<LatestMovieReviewsContainer />);
  });



});
