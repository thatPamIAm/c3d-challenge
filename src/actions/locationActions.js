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

const storeAllCoordinates = (coordinates) => {
  return {
    type: 'STORE_ALL_COORDINATES',
    data: coordinates.coordinates,
  };
};

const getAllCoordinates = () => {
  return (dispatch) => {
    return fetch('/coordinates', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(coordinates => coordinates.json())
      .then(json => dispatch(storeAllCoordinates(json)));
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

const storeCoordinates = (coordinates) => {
  return {
    type: 'STORE_COORDINATES',
    data: coordinates
  }
}

const saveCoordinates = (coordinates) => {
  return (dispatch) => {
    return fetch('/coordinates', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ coordinates }),
    })
    .then(response => response.json())
    .then(coordinates => dispatch(storeCoordinates(coordinates)));
  }
}

const deleteCoordinates = (coordinates) => {
  return {
    type: 'DELETE_COORDINATES',
    data: coordinates
  }
}

const removeCoordinates = (coordinates) => {
  return(dispatch) => {
    return fetch('/coordinates', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      Accept: 'application/json',
        body: JSON.stringify({ coordinates }),
    })
    .then(response => response.json())
    .then(updatedCoords => dispatch(deleteCoordinates(updatedCoords)));
  }
}

export
{ fetchAllLocations,
  saveLocation,
  saveCoordinates,
  removeCoordinates,
  getAllCoordinates
}
