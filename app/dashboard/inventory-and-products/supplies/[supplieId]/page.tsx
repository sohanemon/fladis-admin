'use client';
import AddIcon from '@mui/icons-material/Add';
import { FilledButton, LightButton } from '@/components/atoms/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Supply = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Lollipop Land</h1>
        <p>
          Inventory & Products
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          Supplies
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Details</span>
        </p>
      </div>
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
      <Link href={'/dashboard/inventory-and-products/supplies/add-supply'}>
        <FilledButton primary icon={<AddIcon sx={{ fontSize: 20, my: 1 }} />}>
          Add
        </FilledButton>
      </Link>
    </div>
  );
};

export default Supply;
const data = [
  { 'Purchase No.': '23-BLV-16086' },
  { 'Total cost without vat': '136 €' },
  { 'Total cost': '144.16 €' },
];
