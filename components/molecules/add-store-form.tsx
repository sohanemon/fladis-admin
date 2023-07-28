'use client';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SavingsIcon from '@mui/icons-material/Savings';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../atoms/Button';
import { InputWithIcon } from '../atoms/Input';
import { Uploader } from '../atoms/uploader';
import Switch from '../atoms/switch';

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
          alignItems={'center'}
          gridTemplateColumns={'1fr 1fr'}
          gap={[1, 4]}
          my={6}
        >
          {inputFields.map((_) => (
            <InputWithIcon {..._} key={_.label} />
          ))}
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              gridColumn: 'span 2 /span 2',
            }}
          >
            Store information
          </Typography>{' '}
          <InputWithIcon icon={ApartmentIcon} label={'Warehouses'} />
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <Typography
              sx={{
                color: '#A9AAAD',
                fontSize: 12,
              }}
            >
              Online Shop
            </Typography>
            <Switch />
          </Stack>
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
          )}{' '}
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
    icon: SavingsIcon,
  },
  { label: 'Country', icon: LocationOnIcon },
  { label: 'City', icon: LocationOnIcon },
  { label: 'Postal Code', icon: LocationOnIcon, type: 'number' },
  { label: 'Address', icon: LocationOnIcon, type: 'number' },
];
