'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function FavoriteCard() {
  return (
    <Box
      sx={{
        background: 'white',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.10)',
        borderRadius: '10px',
        p: 3,
      }}
    >
      <Stack>
        <Stack direction={'row'} gap={[2]} alignItems={'center'}>
          <Image
            src={`/assets/images/user.png`}
            alt=''
            width={45}
            height={45}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: '500',
              mb: 1,
            }}
          >
            Haribo Cerise Double
          </Typography>
        </Stack>
        <Box
          display={'grid'}
          gridTemplateColumns={['1fr 1fr', '1fr 4fr']}
          mt={2}
          gap={0.6}
        >
          {data.map((_) => (
            <>
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
            </>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
const data = [{ Barcode: '55757' }, { Price: '5.00€' }];
