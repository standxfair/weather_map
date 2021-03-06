import update from 'immutability-helper';
import { PUSH_HISTORY, DELETE_HISTORY_ITEM, CLEAR_HISTORY } from '../constants/history';

const initialState = update([], { $merge: [] });

const history = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_HISTORY:
      return update(state, { $push: action.payload })

    case DELETE_HISTORY_ITEM:
      return update(state, { $unset: action.payload })

    case CLEAR_HISTORY:
      return update(state, { $set: action.payload })

    default:
      break

  }
  return state;
}

export default history