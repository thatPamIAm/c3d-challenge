require('isomorphic-fetch');


const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

const storeLocation = (location) => {
  return {
    type: 'STORE_LOCATION',
    data: location
  };
};

const saveLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ location }),
    })
    .then(response => response.json())
    .then(location => dispatch(storeLocation(location)));
  }
}

export { fetchAllLocations, saveLocation }
