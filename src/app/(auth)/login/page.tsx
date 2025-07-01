'use client';

import { LoginForm } from '@/components/auth/AuthContainer';
import { useAuthContext } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuthContext();

  return (
    <>
     
      <LoginForm onSubmit={login} />
    </>
  );
}