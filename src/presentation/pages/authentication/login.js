import React from "react";
import "./login.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
    return(
        <div className="login">
            <div className="container">
                <h1>Login</h1>
                <TextField
                    hiddenLabel
                    placeholder="Username"
                    size="small"
                    sx={{ margin: "0.5rem" }}
                />
                <TextField
                    hiddenLabel
                    placeholder="Password"
                    size="small"
                    sx={{ margin: "0.5rem" }}
                />
                <Button variant="contained">
                <p>Login</p>
                </Button>
                <h2>Don't have an account ?</h2>
                <a href="/signup">
                    <h3>Sign up</h3>
                </a>
            </div>
        </div>
    )
}

export default Login;
