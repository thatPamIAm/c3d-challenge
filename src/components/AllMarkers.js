/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Polygon } from 'react-leaflet';
import MapMarker from './Marker';

class AllMarkers extends Component {

  saveClickCoordinates(coordinates) {
    if (!this.props.coordinates.length)
      this.props.saveCoordinates(coordinates)
    if (this.props.coordinates.length)
      this.checkForDuplicates(coordinates)
  }

  checkForDuplicates(coordinates) {
    if (this.returnDuplicate(coordinates).length) {
      this.props.removeCoordinates(coordinates)
    } else {
      this.props.saveCoordinates(coordinates)
    }
  }

  returnDuplicate(newCoords) {
    return this.props.coordinates.reduce((acc, state) => {
      if (state.lat === newCoords.lat && state.lng === newCoords.lng) {
        acc = [state]
      }
    return acc
    },[])
  }

  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <div key={i}>
        <Polygon color="#2a8cfc" positions={this.props.coordinates} />
        <MapMarker
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          saveClickCoordinates={this.saveClickCoordinates.bind(this)}
        />
      </div>
      )
    })

    return (
      <div className="paths-container">
        {markerArray}

      </div>
    );
  }
}

export default AllMarkers;
