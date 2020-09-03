import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import DiscoverContainer from './containers/DiscoverContainer';
class Discover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <DiscoverContainer />
      </Provider>
    );
  }
}

export default Discover;
