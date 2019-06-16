import React from 'react';
import {mount, shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
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
                    <App />
                </MemoryRouter>
            </Provider>
        );
        // console.log(wrapper.debug())
        expect(wrapper.find('.container').exists()).toBe(true);
    })
})