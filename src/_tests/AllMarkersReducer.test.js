import Coordinates from './../reducers/AllMarkersReducer';

describe('Coordinates reducer', () => {

  const initialState = {
    data: [],
  };

  it('should return state by default', () => {
    expect(Coordinates(undefined, {})).toEqual(initialState);
  });

  it('should return an array with all of the saved coordinates when action is STORE_ALL_COORDINATES', () => {

    const coordinates = [
      {
        lat: 39.742043,
        lng: -104.991531
      },
      {
        lat: 42.364506,
        lng: -71.038887
      },
      {
        lat: 34.052235,
        lng: -118.243683
      }
    ];

    expect(Coordinates(undefined, {
      type: 'STORE_ALL_COORDINATES',
      data: coordinates })).toEqual({data: coordinates});
    expect(coordinates.length).toEqual(3);
  });

  it('should return the submitted coordinates when action is STORE_COORDINATES', () => {

    const coordinates = [{lat: 39.742043, lng: -104.991531}];

    expect(Coordinates(undefined, {
      type: 'STORE_COORDINATES',
      data: coordinates })).toEqual({data: coordinates});
    expect(coordinates.length).toEqual(1);
  });

  it('should return an array without the deleted coordinates when action is DELETE_COORDINATES', () => {

    const coordinates = [
      {
        lat: 39.742043,
        lng: -104.991531
      },
      {
        lat: 42.364506,
        lng: -71.038887
      }
    ];

    expect(Coordinates(undefined, {
      type: 'DELETE_COORDINATES',
      data: coordinates })).toEqual({data: coordinates});
    expect(coordinates.length).toEqual(2);
  });
});
