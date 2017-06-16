import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }
  submitForm(e, data) {
    e.preventDefault();
    this.clearFields()
    if(this.validateCoordinates(data) && data.name) {
      let normalizedData = this.parseLatAndLong(data);
      this.props.saveLocation(normalizedData);
    } else {
      this.setState({
        error: 'Valid name, latitude, and longitude must be entered. Please try again.'
      });
    }
  }

  parseLatAndLong(data) {
    data.lat = parseFloat(data.lat);
	  data.lng = parseFloat(data.lng);
	  return data;
  }

  validateLatitude(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90 && lat
  }

  validateLongitude(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180 && lng
  }

  validateCoordinates(data) {
    if (this.validateLatitude(data.lat) && this.validateLongitude(data.lng)) {
      return true
    } else {
      return false
    }
  }

  clearFields(){
    this.name.value = '';
    this.lat.value = '';
    this.lng.value = '';
      this.setState({
        error: ''
      })
  }

  render() {
    const{ error} = this.state
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
        { error && <h2 className='error'>{ error }</h2>}
      </form>
    );
  }
}


export default Form;
