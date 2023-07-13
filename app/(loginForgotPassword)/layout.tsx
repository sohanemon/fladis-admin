import Text from '@/components/atoms/Text';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { ReactNode } from 'react';

const LoginForgotPasswordLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='layout__login-forgot-password'>
      <div className='bg'>
        <Image
          src={`/assets/images/login-bg.svg`}
          alt='login-bg'
          width={500}
          height={1024}
        />
        <div>
          <Text variant='h5'>
            Bienvenue sur votre plateforme L’univers de la gourmandise !
          </Text>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default LoginForgotPasswordLayout;
