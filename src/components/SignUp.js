import React, { useState } from "react";
import UserPool from "../UserPool";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
        if (err.toString().includes("InvalidPasswordException"))
          alert(
            "Password is Invalid! - Please follow : Length>8, Containing LowerCase, UpperCase, Digit, Symbol"
          );
      } else {
        console.log("DATA : ", data);
        alert("Please confirm registration from email!");
        // clear the fields --- how to?
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
