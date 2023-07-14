import { Box, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import { Button } from '../atoms/Button';
import { InputWithIcon } from '../atoms/Input';
import { Text } from '../atoms/Text';

interface Props {
  forgotPassword?: boolean;
  heading: string;
  caption: string;
  form: {
    label: string;
    placeholder: string;
    type: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {};
  }[];
  action?: () => void;
  actionName: string;
}

export default function LoginBox(props: Props) {
  return (
    <>
      <Text variant='h4'>{props.heading}</Text>
      <Text color={'muted.main'} variant='body2'>
        {props.caption}
      </Text>
      <Box className='box'>
        {props.form.map((_) => (
          <InputWithIcon {..._} key={_.label} />
        ))}
        {props.forgotPassword && (
          <Text color={'muted.light'} sx={{ ml: 'auto' }} variant='subtitle2'>
            <Link href={'/forgot-password'}>Forgot password?</Link>
          </Text>
        )}

        <Button
          onClick={() => props.action?.()}
          variant='contained'
          color='primary'
        >
          {props.actionName}
        </Button>
      </Box>
    </>
  );
}
