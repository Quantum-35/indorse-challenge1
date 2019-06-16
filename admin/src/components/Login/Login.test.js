import React from 'react';
import {mount,  configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/store';

import { Login } from './Login';
configure({ adapter: new Adapter() });


describe('it can test Booking', () => {
  const props = {
    login: jest.fn(),
    history: {}
  };

  it('can render without crushing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Login {...props}/>
        </MemoryRouter>
      </Provider>

        );
    expect(wrapper.find('.signup').exists()).toBe(true);
  })
});