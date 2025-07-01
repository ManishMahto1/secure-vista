'use client';

import React, { createContext, useContext, useState,useEffect ,useCallback} from 'react';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/types/user';
import axios from 'axios';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  verify: () => Promise<void>; // Manual verification function // Expose verifyToken explicitly
}


// Default context value when AuthProvider isn’t present
const defaultContext: AuthContextType = {
  user: null,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  loading: false,
  verify: async () => {},
};
const AuthContext = createContext<AuthContextType >(defaultContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false); // Start as false, no initial loading
  const { verifyToken } = useAuth();

// Check token on mount
useEffect(() => {
  const checkAuth = async () => {
    try {
      const verifiedUser = await verifyToken();
      setUser(verifiedUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  
  // Only check auth if not already loading and user not set
  if (!loading && !user) {
    checkAuth();
  }
}, [verifyToken, loading, user]);




  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password }, { withCredentials: true });
      console.log('Login response:', response.data);
      setUser(response.data.user);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Login failed');
      } else {
        throw new Error('Login failed');
      }
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/register', { email, password }, { withCredentials: true });
      console.log('Register response:', response.data);
      setUser(response.data.user);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Login failed');
      } else {
        throw new Error('Login failed');
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  
  const verify = useCallback(async () => {
    setLoading(true);
    try {
      const verifiedUser = await verifyToken();
      setUser(verifiedUser);
    } catch  {
      setUser(null); // Clear user if verification fails
    } finally {
      setLoading(false);
    }
  }, [verifyToken]);


  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, verify }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
 // if (!context) throw new Error('useAuthContext must be used within AuthProvider');
  return context;
};
