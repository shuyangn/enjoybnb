import React from 'react';
import {connect} from 'react-redux';
import navBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: formType => dispatch(openModal(formType))
})

export default connect(mapStateToProps, mapDispatchToProps)(navBar);