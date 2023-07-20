'use client';

import { MuiTheme } from '@/theme/MuiTheme';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated: boolean = false;
  const router = useRouter();
  // useEffect(() => {
  //   if (isUserAuthenticated) {
  //     router.push('/dashboard');
  //   } else {
  //     router.push('/login');
  //   }
  // }, [isUserAuthenticated, router]);
  return <MuiTheme>{children}</MuiTheme>;
}
