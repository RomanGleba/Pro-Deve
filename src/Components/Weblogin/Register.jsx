import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input className={styles.input} type="text" placeholder="Full Name" required />
        <input className={styles.input} type="email" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <input className={styles.input} type="password" placeholder="Confirm Password" required />
        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

