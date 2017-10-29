import React from 'react';
import { connect } from 'react-redux';
import AppLayout from './AppLayout.jsx';

// mapStateToProps is a react-redux specific function
// that injects the redux store, after filters. REQUIRED
//    state = reduxStore
//    ownProps = props passed to container Component (Not Meteor data)
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  // console.log(ownProps)
  return {
    showFocus: state.showFocus,
    ready: state.dataReady,
  };
};

// // mapDispatchToProps is a react-redux specific
// // function that binds a function into the props
// // Default is: dispatch => ({ dispatch }), to this isn't necessary in simple uses
// const mapDispatchToProps = ( dispatch, ownProps ) => {
//  return {
//    open: () => {
//      dispatch( emailSuccess( true ) );
//    }
//  };
// };

// const mergeProps = ( stateProps, actionProps, parentProps ) => ({
// ...stateProps,
// ...actionProps,
// ...parentProps
// });

// Combines everything, including Meteor data
const AppLayoutContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
  // mergeProps
)(AppLayout);

export default AppLayoutContainer;
