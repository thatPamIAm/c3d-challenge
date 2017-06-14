import React, { Component } from 'react';

class Form extends Component {

  submitForm(e, data) {
    e.preventDefault();
    this.clearInputFields()
    if(this.validateCoordinates(data)) {
      let normalizedData = this.parseLatAndLong(data);
      this.props.saveLocation(normalizedData);
    } else {
      console.log('Lat, Long, or name invalid');
    }
  }

  parseLatAndLong(data) {
    data.lat = parseFloat(data.lat);
	  data.lng = parseFloat(data.lng);
	  return data;
  }

  validateLatitude(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }

  validateLongitude(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
  }

  validateCoordinates(data) {
    if (this.validateLatitude(data.lat) && this.validateLongitude(data.lng)) {
      return true
    } else {
      return false
    }
  };

  clearInputFields(){
    this.name.value = ''
    this.lat.value = ''
    this.lng.value = ''
  }

  render() {
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
      </form>
    );
  }
}


export default Form;
