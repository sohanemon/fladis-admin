'use client';
import { Modal } from '@/components/atoms/Modal';
import LoginBox from '@/components/molecules/login-box';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';

const Login = () => {
  return (
    <div className='login'>
      <LoginBox {...data} forgotPassword />
    </div>
  );
};

export default Login;

const data = {
  heading: 'Log in',
  caption: 'Enter your credentials to continue',
  form: [
    {
      label: 'Email Address',
      placeholder: 'demo@devias.io',
      type: 'email',
      icon: MailIcon,
    },
    {
      label: 'Password',
      placeholder: '',
      type: 'password',
      icon: LockIcon,
    },
  ],
  action: () => console.log('clicked login'),
  actionName: 'Log in',
};
