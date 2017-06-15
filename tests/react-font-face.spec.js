import React from "react";
// import { mount } from "enzyme";
import ReactFontFace from "../src/react-font-face";
import ReactFontFace from "../src/react-font-face";

describe("React Font Face", () => {
	let props;
	// let mountedLockScreen;
	// const lockScreen = () => {
	// 	if (!mountedLockScreen) {
	// 		mountedLockScreen = mount(
	// 			<LockScreen {...props} />
	// 		);
	// 	}
	// 	return mountedLockScreen;
	// }

	// beforeEach(() => {
	// 	props = {
	// 		wallpaperPath: undefined,
	// 		userInfoMessage: undefined,
	// 		onUnlocked: undefined,
	// 	};
	// });

	// All tests will go here

	it('calls componentDidMount', () => {
		const wrapper = mount(<Foo />);
		expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
	});

	// it('should render a label', () => {
	// 	const wrapper = shallow(
	// 		<Label>Hello Jest!</Label>
	// 	);
	// 	expect(wrapper).toMatchSnapshot();
	// });

	// - 1 - that a style tag was added to the head



	// - 2 - that the style tag has the right style in it



	// - 3 - that text on the screen has the right font face declaration



	// - 4 - that the HOC component was not rendered but just render children?





});