import { connect } from 'react-redux';
import BoardPage from '../components/BoardPage';
import { addList, addCard } from '../actions/board';

const mapStateToProps = state => ({
  username: state.auth.username,
  lists: state.board.lists,
});

const mapDispatchToProps = dispatch => ({
  addList: (id, name) => dispatch(addList(id, name)),
  // addCard: (id, name) => dispatch(addCard(id, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardPage);
