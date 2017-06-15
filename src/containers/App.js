import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations, getAllCoordinates } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations, getAllCoordinates }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
