import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:return{
      ...state,
      loading:false,
      users:action.payload,
    }
    // case types.GET_SINGLE_USER:
    //   return{
    //     ...state,
    //     loading:false,
    //     user:action.payload,
    //   }
    case types.UPDATE_USER:
      return{
        loading:false,
        user:action.payload
      }
    case types.ADD_USER:
    case types.DELETE_USER:
      return{
      ...state,
      loading:false
    }
    default:
      return state;
  }
};

export default usersReducers;