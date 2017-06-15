/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AllMarkers from '../components/AllMarkers'
import { saveCoordinates, removeCoordinates } from '../actions/locationActions';


const mapStateToProps = (state) => {
  return { locations: state.Locations.data, coordinates: state.Coordinates.data  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveCoordinates, removeCoordinates }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
