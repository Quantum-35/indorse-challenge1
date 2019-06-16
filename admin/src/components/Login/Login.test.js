import React from 'react';
import {mount, shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { Login } from './Login';

describe('Login', () => {
    const props = {
        login: jest.fn(),
        history: {}
    }
    const initialState = {}
    let store;
    const mockStore = configureStore();
    
    beforeEach(() => {
        store = mockStore(initialState);
    })

    it('can render without crushing', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Login {...props}/>
                </MemoryRouter>
            </Provider>
        );
        // console.log(wrapper.debug())
        expect(wrapper.find('.signup').exists()).toBe(true);
    })
});