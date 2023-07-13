import { InputWithIcon } from '@/components/atoms/Input';
import { Text } from '@/components/atoms/Text';
import MailIcon from '@mui/icons-material/Mail';

const Login = () => {
  return (
    <div>
      <Text variant='h4'>Log in</Text>
      <Text color={'muted.main'} variant='body2'>
        Enter your credentials to continue
      </Text>
      <InputWithIcon
        label='Email Address'
        icon={MailIcon}
        placeholder='demo@devias.io'
      />
    </div>
  );
};

export default Login;
