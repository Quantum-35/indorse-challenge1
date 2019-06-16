
import React from 'react';
import { mount } from 'enzyme';

import { Home  } from './Home';

describe('Home', () => {
    it('renders without crushing', () => {
        const wrapper = mount(<Home />);
        expect(wrapper.find('.home').exists()).toBe(true);
    })
})