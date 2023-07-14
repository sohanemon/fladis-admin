'use client';
import LoginBox from '@/components/molecules/login-box';
import { useModalStore } from '@/zustand-store/Modal.store';
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
  action: () => {
    useModalStore.getState().setModalShow(true);
    useModalStore
      .getState()
      .setModalContent(
        ' lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga.'
      );
  },
  actionName: 'Send Mail',
};
