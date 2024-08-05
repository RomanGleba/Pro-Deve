import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Configuration/AuthContext'; // Адаптуйте шлях до вашого контексту автентифікації

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Припускаємо, що у вас є `isAuthenticated` у контексті

  if (!isAuthenticated) {
    // Перенаправлення на сторінку реєстрації для неавторизованих користувачів
    return <Navigate to="/register" />;
  }

  return children;
};

export default ProtectedRoute;
