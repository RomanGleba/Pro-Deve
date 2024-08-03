// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    // Тут можна обробити дані форми, наприклад, відправити їх на сервер
    console.log('Form Data:', formData);
    
    // При успішній реєстрації перенаправити на сторінку логіну
    navigate('/login');
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
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
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
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
};

export default Register;
