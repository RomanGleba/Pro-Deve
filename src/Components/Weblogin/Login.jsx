// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Умовне перенаправлення на сторінку Profile
    if (formData.username && formData.password) {
      navigate('/profile');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.label}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default Login;
