'use client';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SavingsIcon from '@mui/icons-material/Savings';
import { Box, Stack, Typography } from '@mui/material';
import { Button } from '../atoms/Button';
import { InputWithIcon } from '../atoms/Input';
import Switch from '../atoms/switch';

export function WareHouseModal({
  setModalShow,
  edit,
}: {
  setModalShow?: (state: boolean) => void;
  edit?: boolean;
}) {
  return (
    <>
      <Stack justifyContent={'space-between'} direction={'row'}>
        <h3
          style={{
            fontWeight: '500',
          }}
        >
          {edit ? 'Edit' : 'Add'} Warehouses
        </h3>
        <CloseIcon
          onClick={() => setModalShow!(false)}
          sx={{ fontSize: 16, color: '#B6B6B6', cursor: 'pointer' }}
        />
      </Stack>
      <Box
        display={'grid'}
        mx={'auto'}
        alignItems={'center'}
        gridTemplateColumns={'1fr 1fr'}
        gap={[1, 2]}
        my={6}
      >
        {inputFields.map((_) => (
          <InputWithIcon
            sx={{
              ':last-child': {
                gridColumn: 'span 2/span 2',
              },
            }}
            size='small'
            {..._}
            key={_.label}
          />
        ))}
      </Box>
      <Stack direction={'row'} justifyContent={'end'} mx={'auto'} gap='1rem'>
        <Button sx={{ px: 4 }} color='info' variant='contained'>
          Close
        </Button>
        <Button sx={{ px: 4 }} variant='contained'>
          Save
        </Button>
      </Stack>
    </>
  );
}

const inputFields = [
  { label: 'Name', icon: PersonIcon },
  { label: 'Country', icon: LocationOnIcon },
  { label: 'City', icon: LocationOnIcon },
  { label: 'Postal Code', icon: LocationOnIcon, type: 'number' },
  { label: 'Address', icon: LocationOnIcon, type: 'number' },
];
