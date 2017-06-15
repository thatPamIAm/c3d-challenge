import React, { Component } from 'react';
import LeafletMap from './LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {

  componentDidMount() {
    this.getLocations();
    this.getCoordinates();
  }

  getLocations() {
    this.props.fetchAllLocations();
  }

  getCoordinates() {
    this.props.getAllCoordinates();
  }

  render() {
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={this.props.locations} />
      </div>
    );
  }
}

export default App;
