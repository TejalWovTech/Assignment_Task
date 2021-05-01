import {
  GET_EMPLOYEE,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../action/index';

const initialstate = {
  data: [],
};

export default function (state = initialstate, action) {
  console.log('***8', action);
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    case EDIT_EMPLOYEE:
      return {
        ...state,
        data: action.payload,
      };

    case DELETE_EMPLOYEE:
      //return action.payload;
      console.log('oo', action.payload);
      return {
        ...state,
        data: action.payload,
        //data: state.data.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
}
