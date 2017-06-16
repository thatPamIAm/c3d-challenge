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
});
