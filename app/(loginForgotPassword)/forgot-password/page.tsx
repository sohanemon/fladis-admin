'use client';
import { Text } from '@/components/atoms/Text';
import LoginBox from '@/components/molecules/login-box';
import { useModalStore } from '@/zustand-store/Modal.store';
import usePasswordResetState from '@/zustand-store/password-reset-state';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/material';

const ForgotPassword = () => {
  const step = usePasswordResetState((s) => s.step);
  return (
    <div className='login'>
      <LoginBox {...data[step]} />
    </div>
  );
};

export default ForgotPassword;

const data = [
  {
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
      usePasswordResetState.getState().nextStep();
      useModalStore.getState().setModalContent(
        <Stack
          spacing={[4, 5]}
          p={[2, 4, 7]}
          className='success-modal'
          alignItems={'center'}
        >
          <CheckCircleOutlineIcon color='success' sx={{ fontSize: 83 }} />
          <Text sx={{ textAlign: 'center' }}>
            We have send a password reset link to your email.
          </Text>
        </Stack>
      );
    },
    actionName: 'Send Mail',
  },
  {
    heading: 'Reset Password',
    caption: '',
    verification: true,
    form: [
      {
        label: 'Email Address',
        placeholder: 'demo@devias.io',
        type: 'email',
        icon: MailIcon,
      },
    ],
    action: () => {
      usePasswordResetState.getState().nextStep();
    },
    actionName: 'Reset Password',
  },
  {
    heading: 'Reset Password',
    caption: '',
    form: [
      {
        label: 'Password',
        placeholder: '',
        type: 'password',
        icon: LockIcon,
      },
      {
        label: 'Confirm Password',
        placeholder: '',
        type: 'password',
        icon: LockIcon,
      },
    ],
    action: () => {},
    actionName: 'Submit',
  },
];
