import { updateAuthState } from '@/redux/slices/userSlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosInstance from './axios';

const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Make a request to check authentication (protected route)
        await axiosInstance('api/auth/check-auth', 'GET');
        dispatch(updateAuthState(true));
      } catch (error) {
        dispatch(updateAuthState(false));
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  return { loading };
};

export default useAuth;
