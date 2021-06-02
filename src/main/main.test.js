import React from "react"
import { shallow } from "enzyme"
import Main from './Main';
import Enzyme from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})
describe('Main Comp Renders', () => {
    it('test', () => {
        const component = shallow(<Main />)
        const wrapper = component.find('.App')
        expect(wrapper.length).toBe(1)
    });

});
