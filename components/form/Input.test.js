import React from 'react';
import Input from './Input';
import Enzyme, {shallow} from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';

Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
});




describe('<Input />', () => {
    it('renders five <TextInput /> components', () => {
        const wrapper = shallow(<Input/>);

        expect(wrapper.find('TextField')).toHaveLength(0);
    });
});

describe('Input snapshot test ', () => {
    it('should render an input field', () => {
        const wrapper = shallow(<Input/>);

        const props = {
            inputValue: "Foo",
            inputChange: "onChange",
            placeholderText: "Foo Bar"
        };
        const container = wrapper.find(<Input {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    })
})