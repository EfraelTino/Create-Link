import React from "react";


function Login ({onLogin}){
    console.log(onLogin)
    const handleLogin =() =>{
        onLogin(true);
    }
    return(
        <div>
            <p>Form Title</p>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
export default Login;