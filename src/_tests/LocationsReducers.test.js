import Locations from './../reducers/LocationsReducer';
import fakeLocations from './testLocations';

describe('Locations reducer', () => {

  const initialState = {
    data: [],
  };

  it('should return state by default', () => {
    expect(Locations(undefined, {})).toEqual(initialState);
  });

  it('should return an array of locations to state when action is STORE_LOCATIONS', () => {

    expect(Locations(undefined, {
      type: 'STORE_LOCATIONS',
      data: fakeLocations })).toEqual({data: fakeLocations});
    expect(fakeLocations.length).toEqual(3);
  });

  it('should save a new location and return state with the new location when action is STORE_LOCATION', () => {

    expect(Locations(undefined, {
      type: 'STORE_LOCATION',
      data: fakeLocations })).toEqual({data: fakeLocations});
    expect(fakeLocations.length).toEqual(3);
  });

  // it('should return an array without the deleted coordinates when action is DELETE_COORDINATES', () => {
  //
  //   const coordinates = [
  //     {
  //       lat: 39.742043,
  //       lng: -104.991531
  //     },
  //     {
  //       lat: 42.364506,
  //       lng: -71.038887
  //     }
  //   ]
  //
  //   expect(Coordinates(undefined, {
  //     type: 'DELETE_COORDINATES',
  //     data: coordinates })).toEqual({data: coordinates});
  //   expect(coordinates.length).toEqual(2);
  // });
});
