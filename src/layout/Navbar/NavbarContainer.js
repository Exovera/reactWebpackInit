import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar.jsx";

import { toggleSideMenu } from "actions/ui.js";

// mapStateToProps is a react-redux specific function
// that injects the redux store, after filters. REQUIRED
//    state = reduxStore
//    ownProps = props passed to container Component (Not Meteor data)
const mapStateToProps = (state, ownProps) => {
	// console.log(state);
	// console.log(ownProps)
	return {
		// trends: state.base.trends,
	};
};

// mapDispatchToProps is a react-redux specific
// function that binds a function into the props
// Default is: dispatch => ({ dispatch }), to this isn't necessary in simple uses
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		clickHamburger: () => {
			dispatch(toggleSideMenu());
		},
	};
};

// const mergeProps = ( stateProps, actionProps, parentProps ) => ({
// ...stateProps,
// ...actionProps,
// ...parentProps
// });

// Combines everything, including Meteor data
const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	// mergeProps
)(Navbar);

export default NavbarContainer;
