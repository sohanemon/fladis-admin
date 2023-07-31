'use client';
import { LightButton } from '@/components/atoms/Button';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function SupplyDetails() {
  return (
    <Paper elevation={0.4} sx={{ p: [1, 2], pb: 3 }}>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <Box>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            Supplier
          </Typography>
          <Stack direction={['column', 'row']} gap={2} mt={[1, 2, 3]}>
            <Image
              src={`/assets/images/configuration/gift.png`}
              alt=''
              width={65}
              height={65}
            />
            <Box>
              <Typography fontSize={12} fontWeight={500}>
                The Candy King
              </Typography>
              <Typography fontSize={12}>Tax number: BE599696</Typography>
              <Typography
                sx={{
                  color: '#989898',
                  fontSize: 12,
                }}
              >
                Address: Brusel, 9864
                <br />
                Brusel, Belgie
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <LightButton>Mail Purchase</LightButton>
          <Stack gap={0.6} mt={1}>
            {data.map((_) => (
              <Stack key={_['Purchase No.']} gap={1} direction={'row'}>
                <Typography color='#989898' fontSize={12}>
                  {Object.keys(_)}:{' '}
                </Typography>{' '}
                <Typography fontSize={12}>{Object.values(_)}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}
const data = [
  { 'Purchase No.': '23-BLV-16086' },
  { 'Total cost without vat': '136 €' },
  { 'Total cost': '144.16 €' },
];
