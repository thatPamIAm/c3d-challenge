import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import Coordinates from './AllMarkersReducer';

const RootReducer = combineReducers({
  Locations,
  Coordinates
});

export default RootReducer;
