import { connect } from 'react-redux';
import BoardPage from '../components/BoardPage';
import { addList, addCard } from '../actions/board';

const mapStateToProps = state => ({
  username: state.auth.username,
  allIds: state.board.allIds,
  byIds: state.board.byIds,
});

const mapDispatchToProps = dispatch => ({
  addList: (listId, name) => dispatch(addList(listId, name)),
  addCard: (listId, cardId, cardName) => dispatch(addCard(listId, cardId, cardName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage);
