import React, { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import Nav from "./Nav";

const URL = process.env.REACT_APP_URL || "http://localhost:3003/";
const registerURL = `${URL}register`;

export default function Register() {
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");
  const [userPsw, setUserPsw] = useState("");
  const [userPsw2, setUserPsw2] = useState("");

  const { setRoute } = useContext(GlobalContext);

  const register = (_) => {
    if (userName.length < 3) {
      setError("Incorrect name, should be at least 3 characters");
      return;
    }
    if (userPsw.length < 3) {
      setError("Weak password");
      return;
    }
    if (userPsw !== userPsw2) {
      setError("Repeated password should be the same");
      return;
    }
    const postData = async () => {
      try {
        const response = await fetch(registerURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, userPsw }),
          credentials: "include",
        });
        const data = await response.json();
        if (data.status === "valid") {
          setUserName("");
          setUserPsw("");
          setUserPsw2("");
          setError(null);
          setRoute("login");
        } else {
          setError(data.message || `Error: ${response.status}`);
        }
      } catch (error) {
        setError(`Network error: ${error.message}`);
      }
    };
    return postData();
  };

  return (
    <div className="container">
      <Nav />
      <div className="login">
        <div className="login__body">
          <h5 className="login__title">
            {error && <span style={{ color: "red" }}>Error: {error}</span>}{" "}
            Register
          </h5>
          <div className="login__input-group">
            <label className="login__label">User</label>
            <input
              type="text"
              value={userName}
              className="login__input"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label className="login__label">Password</label>
            <input
              type="password"
              value={userPsw}
              className="login__input"
              onChange={(e) => setUserPsw(e.target.value)}
            />
            <label className="label">Repeat password</label>
            <input
              type="password"
              value={userPsw2}
              className="login__input"
              onChange={(e) => setUserPsw2(e.target.value)}
            />
          </div>
          <button className="login__button btn" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
