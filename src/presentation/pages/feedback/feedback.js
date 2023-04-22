import React, { useState } from "react";
import "./feedback.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Feedback = () => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleInputChange = (event) => {
    console.log(inputValue);
    setInputValue(event.target.value);
  };

  return (
    <div className="feedback">
      <h1>Feedback Form</h1>
      <TextField
        className="field"
        id="outlined-multiline-static"
        label="Your feedback here"
        multiline
        rows={5}
        placeholder="Your feedback will be sent to the developer"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleClick}>
        <p>Send Feedback</p>
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Feedback sent !
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Feedback;
