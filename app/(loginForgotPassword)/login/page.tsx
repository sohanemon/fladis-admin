import { Text } from '@/components/atoms/Text';

const Login = () => {
  return (
    <div>
      <Text variant='h4'>Log in</Text>
      <Text color={'muted.main'} variant='body2'>
        Enter your credentials to continue
      </Text>
    </div>
  );
};

export default Login;
