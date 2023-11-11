import { ADD_CHANGE_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from '../actions/actions';

const initialState = { id: 0, name: '', price: '', };

export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHANGE_SERVICE:
    case DELETE_SERVICE:
      return initialState;
    case EDIT_SERVICE:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
