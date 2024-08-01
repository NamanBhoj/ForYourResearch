import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/UserAuthContext';

export const ProtectedRoute: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { user, pending } = useUserAuth();

  useEffect(() => {
    if (!pending && !user) {
      navigate('/');
    }
  }, [user, pending, navigate]);

  // Return null or a fallback UI while checking the user authentication
  if (pending) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
