import * as actions from './../actions/actions';
import fakeLocations from './testLocations';
import fakeCoordinates from './testCoordinates';

describe('actions', () => {

  it('storeAllLocations should create an action to store all the locations', () => {
    const locations = {fakeLocations};

    const expectedAction = {
      type: 'STORE_LOCATIONS',
      data: locations.locations
    };

    expect(actions.storeAllLocations(locations)).toEqual(expectedAction);
  });

  it('storeAllCoordinates should create an action to store all the coordinates', () => {
    const coordinates = {fakeCoordinates};

    const expectedAction = {
      type: 'STORE_ALL_COORDINATES',
      data: coordinates.coordinates
    };

    expect(actions.storeAllCoordinates(coordinates)).toEqual(expectedAction);
  });

  it('storeLocation should create an action to store a newly added location', () => {
    const location = [{
      id: 'id1',
      name: 'Denver',
      lat: 39.742043,
      lng: -104.991531,
    }];

    const expectedAction = {
      type: 'STORE_LOCATION',
      data: location
    };

    expect(actions.storeLocation(location)).toEqual(expectedAction);
  });

  it('storeCoordinates should create an action to store a newly added location', () => {
    const coordinates = [{
      lat: 39.742043,
      lng: -104.991531
    }];

    const expectedAction = {
      type: 'STORE_COORDINATES',
      data: coordinates
    };

    expect(actions.storeCoordinates(coordinates)).toEqual(expectedAction);
  });

  it('deleteCoordinates should create an action to store a newly array without deleted item', () => {

    const coordinates = [{
      lat: 39.742043,
      lng: -104.991531
    }];

    const expectedAction = {
      type: 'DELETE_COORDINATES',
      data: coordinates
    };

    expect(actions.deleteCoordinates(coordinates)).toEqual(expectedAction);
  });
});
