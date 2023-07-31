'use client';
import { Button } from '@/components/atoms/Button';
import { InputWithIcon } from '@/components/atoms/Input';
import { Uploader } from '@/components/atoms/uploader';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Stack, Typography } from '@mui/material';

export default function AddSupplierForm({ edit }: { edit?: boolean }) {
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
              Basic Details
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
          gap={[1, 2]}
          my={6}
        >
          {isBusiness.map((_) => (
            <InputWithIcon {..._} key={_.label} />
          ))}
          <Typography
            sx={{
              color: '#333D49',
              fontSize: 12,
              fontWeight: '500',
              gridColumn: 'span 2/span 2',
            }}
          >
            Address
          </Typography>
          {address.map((_) => (
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
                Cancel
              </Button>
              <Button variant='contained'>Save and Continue</Button>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
}

const isBusiness = [
  { label: 'Business Name', icon: PersonIcon },
  { label: 'Phone Number', icon: LocalPhoneIcon, type: 'number' },
  {
    label: 'Tax Number',
    icon: LocalPhoneIcon,
    type: 'number',
  },
  { label: 'Website', icon: PersonIcon },
];

const address = [
  { label: 'Country', icon: LocationOnIcon },
  { label: 'City', icon: LocationOnIcon },
  { label: 'Postal Code', icon: LocationOnIcon },
  { label: 'Address Line 1', icon: LocationOnIcon },
  { label: 'Address Line 2', icon: LocationOnIcon },
];
