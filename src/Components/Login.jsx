import React from "react";
import '../App.css';
const Login = (props) => {
    return (
        <div className="login-container containerStyleLogin" >
            <div className="content-container">
                <h1 className="welcome-message">Welcome To Decentralized Voting Application</h1>
                <button className="login-button" onClick={props.connectWallet}>Login BlocksPay</button>
            </div>
        </div>
    );
}

export default Login;
