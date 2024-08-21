import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function useAuthMiddleware() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('senneToken');

    if (!token) {
      navigate('/login', { state: { from: location } });
      return;
    }
  }, [navigate, location]);
}

export default useAuthMiddleware;
