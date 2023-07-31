'use client';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Stack } from '@mui/material';
import { Select } from '../atoms/select';
import SupplyTable from './inventory-tables/supply';
import { Ruler } from '../atoms/Ruler';

export default function AddSupplyForm({ edit }: { edit?: boolean }) {
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
        <Box
          display={'grid'}
          mx={'auto'}
          maxWidth={['100%']}
          gridTemplateColumns={['1fr', '1fr 1fr', '3fr 2fr 2fr']}
          gap={[1, 2]}
          my={6}
        >
          <Select label='Supplies' />
          <Select label='Warehouse' />
          {/* <DatePicker /> */}
          <Input
            sx={{ gridColumn: '1/-1' }}
            label='Comment'
            multiline
            rows={4}
          />
        </Box>
        <SupplyTable edit />
        <br />
        <br />
        <Stack
          direction={'row'}
          borderTop={'1px solid #C3C3C520'}
          pt={3}
          justifyContent={'end'}
          mx={'auto'}
          gap='1rem'
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
