import { HEADERS, BASE_URL} from '../../utils/config';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    UPDATE_TODO_LIST,
    REMOVE_TODO_ITEM,
    RESET_LOGIN_STATUS,
} from "./actionTypes";

async function handleAPICall(params) {

    const apiObj = {
        method: params.TYPE || "GET",
        credentials: "same-origin",
        HEADERS
    }

    if (params.TYPE === "POST") {
        apiObj.body = JSON.stringify(params.data);
    }

    const response = await fetch(params.END_POINT, apiObj);

    if (response) {

        const resJson = await response.json();

        try {
            params.dispatch({type: params.successAction, payload: resJson, data: params.data});
        } catch (e) {
            params.dispatch({type: params.failedAction, payload: resJson});
        }
    }
}

export function triggerLoginAPI(obj) {
    return dispatch => {
        const params = {
            dispatch,
            END_POINT: BASE_URL + "login_creds",
            successAction: LOGIN_SUCCESS,
            failedAction: LOGIN_FAILURE,
            data: obj
        }

        handleAPICall(params);
    }
}

export function resetLoginStatus() {
    return {
        type: RESET_LOGIN_STATUS
    }
}

export function updateToDoList(obj) {
    return {
        type: UPDATE_TODO_LIST,
        payload: obj
    }
}

export function removeToDoItem(itemIndex) {
    return {
        type: REMOVE_TODO_ITEM,
        payload: itemIndex
    }
}
