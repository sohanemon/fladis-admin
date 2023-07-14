'use client';
import LoginBox from '@/components/molecules/login-box';
import MailIcon from '@mui/icons-material/Mail';

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
  actionName: 'Send Mail',
};
