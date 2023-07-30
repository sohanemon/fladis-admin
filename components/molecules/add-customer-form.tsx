'use client';
import { Button } from '@/components/atoms/Button';
import { InputWithIcon } from '@/components/atoms/Input';
import { Select } from '@/components/atoms/select';
import { Uploader } from '@/components/atoms/uploader';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Stack, Typography } from '@mui/material';
import Switch from '../atoms/switch';
import GTranslateIcon from '@mui/icons-material/GTranslate';

export default function AddCustomerForm({ edit }: { edit?: boolean }) {
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
          gap={[1, 4]}
          my={6}
        >
          <Typography
            sx={{
              color: '#333D49',
              fontSize: 12,
              fontWeight: '500',
              gridColumn: 'span 2/span 2',
            }}
          >
            Is Business <Switch />
          </Typography>
          {isBusiness.map((_) => (
            <InputWithIcon {..._} key={_.label} />
          ))}
          <Typography
            sx={{
              color: '#333D49',
              fontSize: 12,
              fontWeight: '500',
              mb: -2,
              gridColumn: 'span 2/span 2',
            }}
          >
            Address
          </Typography>
          {address.map((_) => (
            <InputWithIcon {..._} key={_.label} />
          ))}
          <Typography
            sx={{
              color: '#333D49',
              fontSize: 12,
              fontWeight: '500',
              mb: -2,
              gridColumn: 'span 2/span 2',
            }}
          >
            Language
          </Typography>

          <InputWithIcon label={'Language'} icon={GTranslateIcon} />
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

const isBusiness = [
  { label: 'Name', icon: PersonIcon },
  { label: 'Store', icon: PersonIcon },
  {
    label: 'Tax Number',
    icon: LocalPhoneIcon,
    type: 'number',
  },
  { label: 'Phone Number', icon: LocalPhoneIcon, type: 'number' },
];

const address = [
  { label: 'Country', icon: LocationOnIcon },
  { label: 'City', icon: LocationOnIcon },
  { label: 'Postal Code', icon: LocationOnIcon },
  { label: 'Address Line 1', icon: LocationOnIcon },
  { label: 'Address Line 2', icon: LocationOnIcon },
];
