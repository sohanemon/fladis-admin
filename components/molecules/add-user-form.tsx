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

export default function AddUserForm({ edit }: { edit?: boolean }) {
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
              User information
            </Typography>
            <Typography
              sx={{ color: '#A9AAAD', m: '0.5rem 0', fontSize: '12px' }}
            >
              Profile Picture
            </Typography>
          </>
        )}
        <Uploader rounded />
        <Box
          display={'grid'}
          mx={'auto'}
          maxWidth={['100%', '80%']}
          gridTemplateColumns={'1fr 1fr'}
          gap={[1, 2]}
          my={6}
        >
          {inputFields.map((_) => (
            <InputWithIcon {..._} key={_.label} />
          ))}
          <Select label='Gender' />
          <Select label='Role' />
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
  { label: 'First Name', icon: PersonIcon },
  { label: 'Last Name', icon: PersonIcon },
  {
    label: 'Birthdate',
    icon: CalendarMonthIcon,
    // type: 'date'
  },
  { label: 'Phone', icon: LocalPhoneIcon, type: 'number' },
  { label: 'Email', icon: EmailIcon, type: 'email' },
];
