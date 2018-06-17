import { connect } from 'react-redux';
import { login } from '../actions/index';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: (username) => dispatch(login(username)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(WelcomePage);
