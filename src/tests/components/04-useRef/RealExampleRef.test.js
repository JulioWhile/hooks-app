import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <RealExampleRef />', () => {
	const wrapper = shallow(<RealExampleRef />);

	test('debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
	});

	test('debe mostrar el componente <MultipleCustomHooks />', () => {
		wrapper.find('button').simulate('click');
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
	});
});
