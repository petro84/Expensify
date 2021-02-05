import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../../components/Login';

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<Login startLogin={startLogin} />);
});

test('should render Login correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})