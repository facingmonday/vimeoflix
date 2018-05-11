import { 
    FETCH_AUTHORIZATION, FETCH_AUTHORIZATION_SUCCESS, FETCH_AUTHORIZATION_FAILURE, FETCH_AUTHORIZATION_LOADING, RESET_ACTIVE_AUTHORIZATION
} from '../actionTypes/authorization';
  
  const initialState = {
      activeAuthorization: {
        authorization:null,
        error: null,
        loading: false
      }
  };
  
  export default (state = initialState, action) => {
      let error;
      switch (action.type) {
  
        case FETCH_AUTHORIZATION:
          return { ...state, activeAuthorization:{...state.activeAuthorization, loading: true}};
        case FETCH_AUTHORIZATION_LOADING:
          return { ...state, activeAuthorization:{...state.activeAuthorization, loading: true}};
        case FETCH_AUTHORIZATION_SUCCESS:
          return { ...state, activeAuthorization: {authorization: action.payload, error:null, loading: false}};
        case FETCH_AUTHORIZATION_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, activeAuthorization: {authorization: null, error:error, loading:false}};
        case RESET_ACTIVE_AUTHORIZATION:
          return { ...state, activeAuthorization: {authorization: null, error:null, loading: false}};
  
        default:
          return state;
      }
    }
  
    