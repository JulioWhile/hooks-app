import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import '@testing-library/jest-dom';

jest.mock('../../../hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
	test('debe de mostrarse correctamente', () => {
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar la información', () => {
		useFetch.mockReturnValue({
			data: [
				{
					author: 'Julio',
					quote: 'Que onda',
				},
			],
			loading: false,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find('.alert').exists()).toBe(false);
		expect(wrapper.find('.mb-0').text().trim()).toBe('Que onda');
		expect(wrapper.find('footer').text().trim()).toBe('Julio');
	});
});
