import { ADD_CHANGE_SERVICE, DELETE_SERVICE } from '../actions/actions';

const initialState = [
    {id: 1, name: 'Замена стекла', price: 21000},
    {id: 2, name: 'Замена дисплея', price: 25000},
  ];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHANGE_SERVICE:
      const { id } = action.payload;
      const name = action.payload.name.trim();
      const price = Number(action.payload.price);
      if (id) {
        return state.map((s) => { return (s.id === id)? {id, name, price} : s; });
      };
      return [...state, {id: state.length? state[state.length - 1].id + 1 : 1, name, price}];
    case DELETE_SERVICE:
      return state.filter(s => s.id !== action.payload);
    default:
      return state;
  }
}
