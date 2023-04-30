import React from "react";
import "./signup.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Signup = () => {
    return(
        <div className="signup">
            <div className="container">
                <h1>Signup</h1>
                <TextField
                    hiddenLabel
                    placeholder="Username"
                    size="small"
                    sx={{ margin: "0.5rem" }}
                />
                <TextField
                    hiddenLabel
                    placeholder="Email"
                    size="small"
                    sx={{ margin: "0.5rem" }}
                />
                <TextField
                    hiddenLabel
                    placeholder="Phone Number"
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
                <p>Signup</p>
                </Button>
            </div>
        </div>
    )
}

export default Signup;
