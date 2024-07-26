import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    navigate('/profile');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


