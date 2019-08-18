import { LOGIN_SUCCESS, LOGIN_FAILURE, RESET_LOGIN_STATUS } from "../actions/actionTypes";

const initialState = {
    isLoggedIn: false,
    loginErrorMsg: ''
};

const loginReducer = function(state = initialState, {type, data, payload}) {
    switch(type) {
        case LOGIN_SUCCESS:
            const userInput = data;
            const loginCreds = payload;

            // compare hard coded string in db.json file to check for valid login
            const isLoggedIn = (JSON.stringify(userInput) === JSON.stringify(loginCreds));
            const loginErrorMsg = (isLoggedIn) ? "" : "Invalid Credentials";

            return {
                ...state,
                isLoggedIn,
                loginErrorMsg,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                loginErrorMsg: "Login Failed",
            };
        case RESET_LOGIN_STATUS:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;

    }
};

export default loginReducer;