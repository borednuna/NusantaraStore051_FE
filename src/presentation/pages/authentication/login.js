import React, { useState, useContext } from "react";
import {useDispatch, useSelector} from "react-redux";
import "./login.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
    const dispatch = useDispatch();
    const myVar = useSelector((state) => state.user);
    console.log(myVar)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(
        {
            'email': '',
            'password': ''
        }
    )

    const handleInputEmail = (event) => {
        setEmail(event.target.value);
        setData(
            {
                'email': email,
                'password': password
            }
        )
    }

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
        setData(
            {
                'email': email,
                'password': password
            }
        )
    }

    const sendData = () => {
        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })
            .then(response => response.text())
            .then(result => {
                // setData(JSON.parse(result));
                dispatch({type: 'SET_USER', payload: JSON.parse(result)});
                console.log(result);
            })
            .catch(error => console.error(error));
    }

    const handleSubmit = () => {
        sendData();
    }

    return(
        <div className="login">
            <div className="container">
                <h1>Login</h1>
                <TextField
                    hiddenLabel
                    placeholder="Email"
                    size="small"
                    sx={{ margin: "0.5rem" }}
                    onChange={handleInputEmail}
                />
                <TextField
                    hiddenLabel
                    placeholder="Password"
                    size="small"
                    sx={{ margin: "0.5rem" }}
                    onChange={handleInputPassword}
                />
                <Button variant="contained" onClick={handleSubmit}>
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
