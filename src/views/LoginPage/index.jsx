import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerLoginAPI } from '../../redux/actions';
import ErrorMessage from '../../components/ErrorMessage';

class LoginPage extends React.Component {
    
    state = {
        emailErrorMsg: '',
        passwordErrorMsg: ''
    }

    triggerLogin = e => {
        // prevents default behaviour
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // trigger login api
        this.props.triggerLoginAPI({email, password});
    }

    componentDidUpdate() {

        // routes to different screen
        (this.props.isLoggedIn) && this.props.history.push("/home");
    }

    render() {
        const { loginErrorMsg } = this.props;

        return (
            <form onSubmit = {this.triggerLogin}>
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
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        loginErrorMsg: state.loginReducer.loginErrorMsg,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ triggerLoginAPI }, dispatch);
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default Login;
