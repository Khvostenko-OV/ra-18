export const ADD_CHANGE_SERVICE = 'ADD_CHANGE_SERVICE';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const DELETE_SERVICE = 'REMOVE_SERVICE';

export function add_changeService(item) {
  return {type: ADD_CHANGE_SERVICE, payload: item};
}

export function deleteService(id) {
  return {type: DELETE_SERVICE, payload: id};
}

export function editService(item) {
  return {type: EDIT_SERVICE, payload: item};
}
