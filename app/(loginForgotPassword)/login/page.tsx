'use client';
import { InputWithIcon } from '@/components/atoms/Input';
import { Text } from '@/components/atoms/Text';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import { Box } from '@mui/material';
import { Button } from '@/components/atoms/Button';

const Login = () => {
  return (
    <div className='login'>
      <Text variant='h4'>Log in</Text>
      <Text color={'muted.main'} variant='body2'>
        Enter your credentials to continue
      </Text>
      <Box className='box'>
        {form.map((_) => (
          <InputWithIcon {..._} key={_.label} />
        ))}
        <Text color={'muted.light'} sx={{ ml: 'auto' }} variant='subtitle2'>
          Forgot password?
        </Text>
        <Button variant='contained' color='primary'>
          Log In
        </Button>
      </Box>
    </div>
  );
};

export default Login;

const form = [
  {
    label: 'Email Address',
    placeholder: 'demo@devias.io',
    type: 'email',
    icon: MailIcon,
  },
  {
    label: 'Password',
    placeholder: '******',
    type: 'password',
    icon: LockIcon,
  },
];
