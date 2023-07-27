'use client';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../atoms/Button';
import { InputWithIcon } from '../atoms/Input';
import { Select } from '../atoms/select';
import { Uploader } from '../atoms/uploader';

export default function AddStoreForm({ edit }: { edit?: boolean }) {
  return (
    <>
      <Box
        padding={'14px 22px'}
        sx={{
          borderRadius: '5px',
          background: '#FFF',
          boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
        }}
      >
        {edit ? (
          <br />
        ) : (
          <>
            <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>
              Store information
            </Typography>
            <Typography
              sx={{ color: '#A9AAAD', m: '0.5rem 0', fontSize: '12px' }}
            >
              Logo
            </Typography>
          </>
        )}
        <Uploader />
        <Box
          display={'grid'}
          mx={'auto'}
          maxWidth={['100%', '80%']}
          gridTemplateColumns={'1fr 1fr'}
          gap={[1, 4]}
          my={6}
        >
          {inputFields.map((_) => (
            <InputWithIcon {..._} key={_.label} />
          ))}
        </Box>
        <Stack
          direction={'row'}
          borderTop={'1px solid #C3C3C520'}
          pt={3}
          justifyContent={'end'}
          mx={'auto'}
          gap='1rem'
          maxWidth={['100%', '80%']}
        >
          {edit ? (
            <Button variant='contained'>Save Changes</Button>
          ) : (
            <>
              <Button color='info' variant='contained'>
                Back
              </Button>
              <Button variant='contained'>Submit</Button>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
}

const inputFields = [
  { label: 'Name', icon: PersonIcon },
  { label: 'Formal Name', icon: PersonIcon },
  {
    label: 'VATnumber',
    icon: CalendarMonthIcon,
  },
  { label: 'Country', icon: LocalPhoneIcon },
  { label: 'City', icon: EmailIcon },
  { label: 'Postal Code', icon: LocalPhoneIcon, type: 'number' },
];
