import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';
import '@testing-library/jest-dom';

describe('Pruebas en <HookApp />', () => {
	test('Debe de mostrarse correctamente', () => {
		const wrapper = shallow(<HookApp />);

		expect(wrapper).toMatchSnapshot();
	});
});
