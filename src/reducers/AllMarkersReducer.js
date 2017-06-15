const initialState = {
  data: [],
};

const Coordinates = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_ALL_COORDINATES':
      // stores an array of coordinates to draw to map
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });
    case 'STORE_COORDINATES':
      return Object.assign({}, state, { data: action.data });
    case 'DELETE_COORDINATES':
      return Object.assign({}, state, { data: action.data })
    default:
      return state;
  }
};
//asdfadsf
export default Coordinates;
