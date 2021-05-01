import {
  GET_EMPLOYEE,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from './index';

export function getEmployee() {
  return dispatch => {
    return dispatch({
      type: 'GET_EMPLOYEE',
    });
  };
}

export function addEmployee(data) {
  return dispatch => {
    return dispatch({
      type: 'ADD_EMPLOYEE',
      payload: data,
    });
  };
}

export function editEmployee(data) {
  console.log('###', data);
  return dispatch => {
    return dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: data,
    });
  };
}

export function deleteEmployee(data) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: data,
    });
  };
}
