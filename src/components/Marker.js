import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import tealdot from '../imgs/tealdot.svg'

class MapMarker extends Component {

  grabLocation(e) {
    const { lat, lng } = e.target._latlng;
    const coordinatesObject = {lat, lng}
    this.props.saveClickCoordinates(coordinatesObject)
  }

  render() {
    let icon = L.icon({
      iconUrl: tealdot,
      iconSize: [15, 15]
    });

    return (
      <div className="marker-container">
          <Marker
            onClick={ (e) => this.grabLocation(e)}
            position={this.props.location}
            icon={icon}
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{this.props.name}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>
    )
  }
}

export default MapMarker;
