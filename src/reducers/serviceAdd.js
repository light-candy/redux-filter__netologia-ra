import { CHANGE_SERVICE_FIELD,
         ADD_SERVICE,
         START_EDIT_SERVICE,
         CLEAR_SERVICE_FIELD
       } from '../actions/actionTypes';

const initialState = {
    id:"",
    name: "",
    price: ""
};

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_SERVICE_FIELD:
        const { name, value }  = action.payload;
        return { ...state, [name]: value };
      case CLEAR_SERVICE_FIELD:
        return { ...initialState };
      case ADD_SERVICE:
        return { ...initialState };
      case START_EDIT_SERVICE:
        const { id, service, price } = action.payload;
        return { ...state, id: id, name: service, price: price };
      default:
        return state;
    }   
};
