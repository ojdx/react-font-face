import React, { Component } from "react";
// import ReactTestUtils from 'react-dom/test-utils'; // ES6
import { expect } from 'chai';
import ReactFontFace from "../src/react-font-face";
// import Welcome from "../stories/Welcome";
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

describe("React Font Face Component -- ", () => {
	let props;

	// All tests will go here
	// shallow - shallow rendering
	// render - static rendered markup
	// mount - full DOM rendering

	// CONFIG FOR HOC
	let fontConfig = {
		google: [
			'Indie Flower',
		],
	};

	// DECLARE FONT FAMILY TO USE
	let styles = {
		wrapper: {
			fontFamily: 'Indie Flower'
		},
		font1: {
			fontFamily: 'Indie Flower'
		},
		font2: {
			fontFamily: 'Indie Flower'
		},
		font3: {
			fontFamily: 'Indie Flower'
		},
	};

	// TEST COMPONENT
	let testComponent = class DummyComponent extends Component {
		render(){
			return (
				<div style={ styles.wrapper }>
					<div>Zero</div>
					<div style={ styles.font1 }>One</div>
					<div style={ styles.font2 }>Two</div>
					<div style={ styles.font3 }>Three</div>
				</div>
			)
		}
	};
	let WrappedComponent = ReactFontFace( testComponent, fontConfig );



	// TEST CASE - check if it render
	// ---------
	it('- it renders', () => {
		const _shallow = shallow(
			<WrappedComponent />
		);
		// console.log("------ HERE ------");
		// console.log( _shallow.exists() );

		expect( _shallow.exists() ).to.equal(true)
	});



	// TEST CASE - check snapshot
	// ---------
	it('- matches snapshot', () => {

		const _shallow = shallow(
			<WrappedComponent />
		);

		// console.log("------ HERE ------");
		// console.log( _shallow );
		// console.log( toJson(_shallow) );

		// expect( toJson(_shallow) ).toMatchSnapshot()
	});


	// TEST CASE - JSDOM mount - full render
	// ---------
	it('- mounted- JSDOM', () => {

		const _mount = mount( <WrappedComponent />  );

		// console.log("------ HERE ------");
		// console.log( _mount );
		// console.log( document.body.innerHTML );
		// console.log( document.head.innerHTML );

		// console.log( _mount.find('body') );
		// console.log( toJson(_shallow) );

		// expect( toJson(_shallow) ).toMatchSnapshot()
	});



	// TEST CASE
	// ---------
	it('- in progress', () => {

		// const wrapper = mount(<Welcome />);
		const _shallow = shallow(
			<WrappedComponent />
		);
		const _render = render(
			<WrappedComponent />
		);
		const _mount = mount(
			<WrappedComponent test="test" />
		);
		// expect(wrapper).toMatchSnapshot();

		// console.log("------ HERE ------");
		// console.log( _shallow );
		// console.log( _shallow.prototype );
		// console.log( _shallow.children() );
		// console.log( _render );
		// console.log( _render.html() );
		// console.log( _mount.props() );
		// console.log( _mount.getNode() );
		// console.log( _mount.html() );
		// console.log( _mount.render() );
		// console.log( _mount.parent() );

		// expect(_shallow.prototype.componentDidMount.calledOnce).to.equal(true);
		// expect(true).to.equal(true)
		// expect( _shallow.exists() ).to.equal(true)
	});



	// - 1 - that a style tag was added to the head
	// - 2 - that the style tag has the right style in it
	// - 3 - that text on the screen has the right font face declaration
	// - 4 - that the HOC component was not rendered but just render children?
	// 5 test that component renders if only passed 'google' array or 'file' array
	// 6 test if you can pass a single object for only one font
	// 7 test if you can pass an array of objects for many fonts

});