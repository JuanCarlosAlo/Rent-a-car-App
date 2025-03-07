'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const redirectToLogin = () => {
    router.push('/login');
  };

  const redirectToPayment = () => {
    router.push('/payment');
  };

  const handleRedirect = () => {

    if (session) {
      redirectToPayment();
    } else {
      redirectToLogin();
    }
  };

  return { handleRedirect, redirectToLogin, redirectToPayment};
};

export default useAuth;