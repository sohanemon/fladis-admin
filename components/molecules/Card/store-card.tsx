'use client';
import { Button, LightButton } from '@/components/atoms/Button';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Actions from '../actions';

export default function StoreCard() {
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
        <Image
          alt=''
          src='/assets/images/configuration/gift.png'
          width={45}
          height={45}
          style={{
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
          }}
        />
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
        <Actions isClaimType />
      </Stack>
      <Stack gap={1} py={2}>
        {data.map((_) => (
          <Box
            key={_.Address}
            display={'grid'}
            gridTemplateColumns={['1fr 5fr']}
            gap={2}
          >
            <Typography
              sx={{
                color: '#313745',
                fontSize: 12,
                fontWeight: '500',
              }}
            >
              {Object.keys(_)}:
            </Typography>
            <Typography
              sx={{
                color: '#313745',
                fontSize: 12,
              }}
            >
              {Object.values(_)}
            </Typography>
          </Box>
        ))}
        <Box display={'grid'} gridTemplateColumns={['1fr 5fr']} gap={2}>
          <div />
          <Button
            sx={{
              color: '#46A524',
              fontSize: 10,
              background: '#F6FBF4',
              width: 'max-content',
              px: 2,
              borderRadius: '5px',
            }}
          >
            Online Shop
          </Button>
        </Box>
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

const data = [
  { TaxNumber: '6547457' },
  { Warehouse: '100in1, 100in1, 100in1' },
  { Address: 'Belgium,City, Postal code, Address' },
];
