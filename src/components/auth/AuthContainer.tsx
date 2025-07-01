'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent, useState, useEffect } from 'react';
import { EnvelopeIcon, LockClosedIcon, UserIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
// Custom Notification Component
const Notification = ({ message, type }: { message: string; type: 'success' | 'error' }) => (
  <AnimatePresence>
    <motion.div
      key={message}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg text-sm font-medium ${
        type === 'success' 
          ? 'bg-green-500 text-indigo-50' 
          : 'bg-rose-500 text-rose-50'
      } shadow-lg z-50`}
    >
      {message}
    </motion.div>
  </AnimatePresence>
);
const AuthContainer = ({ 
  children, 
  type,
  notification
}: { 
  children: React.ReactNode;
  type: 'login' | 'register';
  notification?: { message: string; type: 'success' | 'error' };
}) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-violet-900 flex items-center justify-center p-4">
    {/* Custom Notification */}
    {notification && (
      <Notification message={notification.message} type={notification.type} />
    )}

    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-md bg-gradient-to-br from-indigo-600 rounded-2xl shadow-xl p-8"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-50 to-violet-00 bg-clip-text text-transparent">
          {type === 'login' ? 'Welcome Back' : 'Create Account'}
        </h1>
        <p className="text-indigo-100 mt-2">
          {type === 'login' ? 'Sign in to continue' : 'Join our community'}
        </p>
      </motion.div>
      {children}
    </motion.div>
  </div>
);

const InputField = ({
  icon: Icon,
  type,
  value,
  onChange,
  placeholder,
  autocomplete
}: {
  icon: React.ComponentType<{ className?: string }>;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autocomplete?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-3 mb-4"
  >
    <Icon className="h-5 w-5 text-indigo-300 mr-3" />
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autocomplete}
      className="w-full bg-transparent text-indigo-50 placeholder-indigo-50 focus:outline-none"
      required
    />
  </motion.div>
);

export function LoginForm({ onSubmit }: { onSubmit: (email: string, password: string) => Promise<void> }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(email, password);
      setNotification({ message: 'Login successful!', type: 'success' });
      // Redirect after 1 second
      setTimeout(() => router.push('/dashboard'), 1000);
    }   catch (error) {
      setNotification({ 
        message: error instanceof Error ? error.message : 'Login failed',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

 

  return (
    <AuthContainer type="login" notification={notification || undefined}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={EnvelopeIcon}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          autocomplete="email"
        />
        <InputField
          icon={LockClosedIcon}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autocomplete='password'
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
        >
          {isLoading ? (
            <ArrowPathIcon className="h-5 w-5 animate-spin" />
          ) : (
            'Sign In'
          )}
        </motion.button>
        <div className="text-center mt-6">
          <p className="text-indigo-200">
            Don&apos;t have an account?{' '}
            <a href="/register" className="text-purple-300 hover:text-purple-200 underline">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </AuthContainer>
  );
}

export function RegisterForm({ onSubmit }: { onSubmit: (email: string, password: string) => Promise<void> }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      await onSubmit(email, password);
      setNotification({ message: 'Registration successful!', type: 'success' });
    } catch (error) {
      setNotification({ 
        message: error instanceof Error ? error.message : 'Registration failed',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer type="register" notification={notification || undefined}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={UserIcon}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          autocomplete="email"
        />
        <InputField
          icon={LockClosedIcon}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autocomplete="new-password"
        />
        <InputField
          icon={LockClosedIcon}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          autocomplete="new-password"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
        >
          {isLoading ? (
            <ArrowPathIcon className="h-5 w-5 animate-spin" />
          ) : (
            'Create Account'
          )}
        </motion.button>
        <div className="text-center mt-6">
          <p className="text-indigo-200">
            Already have an account?{' '}
            <a href="/login" className="text-purple-300 hover:text-purple-200 underline">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </AuthContainer>
  );
}