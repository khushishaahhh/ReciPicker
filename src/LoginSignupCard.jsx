import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "./LoginSignupCard.css";

const LoginSignupCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="background-container">
      <div className={`card-container ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side: Login */}
        <div className="card-front">
          <h2>Login</h2>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Login
            </Button>
          </form>
          <p>
            Don't have an account?{" "}
            <Button onClick={handleFlip} color="secondary">
              Sign Up
            </Button>
          </p>
        </div>

        {/* Back Side: Signup */}
        <div className="card-back">
          <h2>Sign Up</h2>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "16px" }}
            >
              Sign Up
            </Button>
          </form>
          <p>
            Already have an account?{" "}
            <Button onClick={handleFlip} color="secondary">
              Login
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupCard;
