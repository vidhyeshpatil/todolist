import React, { useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerLoginAPI } from '../../redux/actions';
import ErrorMessage from '../../components/ErrorMessage';
import PropTypes from 'prop-types';

export default function LoginPage({ history }) {
    
    // dispatch hook - approx. equivalent to mapDispatchToProps
    const dispatch = useDispatch();

    // allow to extract data from the redux store state - approx. equivalent to mapStateToProps
    const {isLoggedIn, loginErrorMsg} = useSelector(state => state.loginReducer);

    const triggerLogin = useCallback(
        initLogin,
        [dispatch]
    );

    function initLogin(e) {
        // prevents default behaviour
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // trigger login action
        dispatch(triggerLoginAPI({email, password}));
    }

    function reDirectToHome() {
        // if user is valid it routes to different screen
        (isLoggedIn) && history.push("/home");
    }

    // to solve react exhaustive-deps lint rule, need to add dependency using useCallback method
    const initHome = useCallback(reDirectToHome, [isLoggedIn]);

    useEffect(() => initHome(), [initHome]);

    return (
        <form onSubmit = {triggerLogin}>
            <div className = "container login-container">
                <div className = "wrapper"> 
                    <h2> --> My TO-DO List</h2>
                        <input 
                            type = "email"
                            name = "email"
                            placeholder = "Enter your e-mail address"
                        />
                        <input 
                            type = "password"
                            name = "password"
                            placeholder = "Enter your password"
                        />
                        <ErrorMessage msg={loginErrorMsg} />
                        <button type = "submit">Login</button>
                </div>
            </div>
        </form>
    );
}

// props validation
LoginPage.propTypes = {
    history: PropTypes.object,
}
