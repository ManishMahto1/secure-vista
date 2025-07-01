'use client';

import { RegisterForm } from '@/components/auth/AuthContainer';
import { useAuthContext } from '@/context/AuthContext';


export default function RegisterPage() {
  const { register } = useAuthContext();

  return (
    <>
      
      <RegisterForm onSubmit={register} />
    </>
  );
}