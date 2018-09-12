import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../reducers/auth';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      login,
    },
    dispatch,
  )
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
