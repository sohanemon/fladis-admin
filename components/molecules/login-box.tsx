import { Box, Stack, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import { Button } from '../atoms/Button';
import { InputWithIcon } from '../atoms/Input';
import { Text } from '../atoms/Text';
import { maxLengthCheck } from '@/lib/utils';

interface Props {
  forgotPassword?: boolean;
  heading: string;
  verification?: boolean;
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
        {props.verification && (
          <Stack>
            <Text color={'muted.light'} variant='subtitle2'>
              Verification code
            </Text>
            <div className='verification-input'>
              {Array.from(Array(6)).map((_) => (
                <input
                  type='number'
                  key={_}
                  maxLength={1}
                  onInput={(e) => maxLengthCheck(e)}
                />
              ))}
            </div>
          </Stack>
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
