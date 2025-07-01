import { useCallback } from 'react';
import { User } from '@/types/user';
import axios from 'axios';

// hooks/useAuth.ts
export const useAuth = () => {
  const verifyToken = useCallback(async (): Promise<User | null> => {
    try {
      const response = await axios.get('/api/auth/verify', { 
        withCredentials: true,
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        validateStatus: (status) => status < 500 // Don't throw for 401 errors
      });
      return response.data.user || null;
    } catch {
      // Clear invalid token
     // document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      return null;
    }
  }, []);

  return { verifyToken };
};

/* 
export const useAuth = () => {
  const verifyToken = useCallback(async (): Promise<User | null> => {
    try {
      const response = await axios.get('/api/auth/verify', { withCredentials: true });
      console.log('Verify response:', response.data);
      return response.data.user || null;
    } catch  {
      console.log('Verify failed:');
      
      // Suppress console logs for 401 errors unless debugging
     if (error.response?.status !== 401) {
        console.error('Verify failed:', error.response?.status, error.response?.data);
      } 
      return null;
    }
  }, []);

  return { verifyToken };
}; */