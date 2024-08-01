import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';

export const ProtectedRoute: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Return null or a fallback UI while checking the user authentication
  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
