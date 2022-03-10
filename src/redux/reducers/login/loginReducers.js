
import { POST_LOGIN, SIGNIN_SUCCESS, SIGNIN_ERROR, DID_LOGIN_ACTION } from '../../actions/actionTypes';

const initialState = {
   loading: false,
   data: null,
   error: null,
}

const loginReducers = (state = initialState, action) => {

    switch (action.type) {
        case POST_LOGIN:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case SIGNIN_SUCCESS:
            return {
                loading: false,
                data: action.response,
                error: null,
            };
        case SIGNIN_ERROR:
            return {
                loading: false,
                data: null,
                error: action.error,
            };

        default:
            return state;
    }
}

export default loginReducers;