import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BoardPage from '../components/BoardPage';
import {
  addList,
  addCard,
  editListTitle,
  removeCard,
  editDescription,
  addComment,
  removeComment,
} from '../reducers/board';
import { logout } from '../reducers/auth';

const mapStateToProps = state => ({
  username: state.auth.username,
  allIds: state.board.allIds,
  byIds: state.board.byIds,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      addList,
      addCard,
      editListTitle,
      removeCard,
      logout,
      editDescription,
      addComment,
      removeComment,
    },
    dispatch,
  )
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardPage);
