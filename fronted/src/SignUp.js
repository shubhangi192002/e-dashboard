import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    try {
      console.warn(name, email, password);
      setName("");
      setEmail("");
      setPassword("");

      const response = await axios.post('http://localhost:8080/register', {
        name,
        email,
        password
      });

      const data = response.data;
      console.log(data);

      if (data) {
        navigate('/');
      }
    } catch (err) {
      console.log("Error During registration:", err);
    }
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className="inputBox" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
      <input className="inputBox" type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
      <input className="inputBox" type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
      <button onClick={collectData} type='button' className='button'>Sign Up</button>
    </div>
  );
};

export default SignUp;
