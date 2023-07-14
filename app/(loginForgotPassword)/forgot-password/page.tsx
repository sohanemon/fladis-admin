'use client';
import { Text } from '@/components/atoms/Text';
import LoginBox from '@/components/molecules/login-box';
import { useModalStore } from '@/zustand-store/Modal.store';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Stack } from '@mui/material';

const ForgotPassword = () => {
  return (
    <div className='login'>
      <LoginBox {...data} />
    </div>
  );
};

export default ForgotPassword;

const data = {
  heading: 'Forgot password?',
  caption: 'Enter your email address below',
  form: [
    {
      label: 'Email Address',
      placeholder: 'demo@devias.io',
      type: 'email',
      icon: MailIcon,
    },
  ],
  action: () => {
    useModalStore.getState().setModalShow(true);
    useModalStore.getState().setModalContent(
      <Stack spacing={6} p={5} className='success-modal' alignItems={'center'}>
        <CheckCircleOutlineIcon color='success' sx={{ fontSize: 83 }} />
        <Text sx={{ textAlign: 'center' }}>
          We have send a password reset link to your email.
        </Text>
      </Stack>
    );
  },
  actionName: 'Send Mail',
};
