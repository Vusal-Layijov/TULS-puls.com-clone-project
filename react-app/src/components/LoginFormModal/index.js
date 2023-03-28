import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (Array.isArray(data)) {
      setErrors(data);
    } else {
        await fetch(`/send_email/${email}`)
        closeModal()
    }
  };

  const handleDemoSubmit = async () => {
     //e.preventDefault();
     const data = await dispatch(login("demo@aa.io", "password"));
     if (Array.isArray(data)){
      setErrors(data)
     }else {
      closeModal()
     }
    }



  //   setErrors([]);
  //   return dispatch(login({ email: "demo@aa.io", password: 'password' }))
  //     .then(closeModal)
  //     .catch(
  //       async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //       }
  //     );
  // };

  return (
    <div className="log-in" >
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className='log-in-form' >
        <ul>
          {errors && errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id='username'
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" id="log-in-button" >Log In</button>
      </form>
      <div>
        <button id='log-in-demo-user' className="curs" onClick={() => handleDemoSubmit()}>Demo User</button>
      </div>
    </div>
  );
}

export default LoginFormModal;
