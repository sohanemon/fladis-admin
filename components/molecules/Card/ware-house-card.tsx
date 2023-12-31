'use client';
import { LightButton } from '@/components/atoms/Button';
import { Box, Stack, Typography } from '@mui/material';
import Actions from '../actions';

export default function WareHouseCard() {
  return (
    <Box
      px={3}
      pt={3}
      sx={{
        background: 'white',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.10)',
        borderRadius: '10px',
      }}
    >
      <Stack direction={'row'} alignItems={'center'} gap={1.5}>
        <Typography
          sx={{
            flex: '1 1 auto',
            color: '#313745',
            fontSize: 12,
            fontWeight: '500',
          }}
        >
          The candy King
        </Typography>
        <Actions deleteOnly />
      </Stack>
      <Stack gap={1} py={2}>
        <div
          style={{
            width: '100%',
            color: 'rgba(0, 0, 0, 0.80)',
            fontSize: 12,
            fontFamily: 'Poppins',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}
        >
          Belgium,City, Postal code, <br /> Address <br /> Stores: 100in1, Candy
          Store
        </div>
        <hr
          style={{
            borderTop: '0.1px #EBEBEB solid',
          }}
        />
        <LightButton>Details</LightButton>
      </Stack>
    </Box>
  );
}
