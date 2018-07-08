import { connect } from 'react-redux';
import BoardPage from '../components/BoardPage';
import { addList, addCard, editListTitle, removeCard, editDescription, addComment, removeComment } from '../actions/board';
import { logout } from '../actions/auth'

const mapStateToProps = state => ({
  username: state.auth.username,
  allIds: state.board.allIds,
  byIds: state.board.byIds,
});

const mapDispatchToProps = dispatch => ({
  addList: (listId, name) => dispatch(addList(listId, name)),
  addCard: (listId, cardId, cardName) => dispatch(addCard(listId, cardId, cardName)),
  editListTitle: (listId, title) => dispatch(editListTitle(listId, title)),
  removeCard: (listId, cardId) => dispatch(removeCard(listId, cardId)),
  logout: () => dispatch(logout()),
  editDescription: (listId, cardId, description) => dispatch(editDescription(listId, cardId, description)),
  addComment: (listId, cardId, comment) => dispatch(addComment(listId, cardId, comment)),
  removeComment: (listId, cardId, commentId) => dispatch(removeComment(listId, cardId, commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage);
