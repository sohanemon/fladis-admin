import { LightButton } from '@/components/atoms/Button';
import { Ruler } from '@/components/atoms/Ruler';
import { Box, Stack, Typography } from '@mui/material';

export default function AddressCard() {
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
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: '500',
            mb: 1,
          }}
        >
          Full Name
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
          }}
        >
          Contact Type
          <br />
          Email
          <br />
          Phone Number
        </Typography>
        <Ruler style={{ marginBlock: 16 }} />
        <LightButton>Details</LightButton>
      </Stack>
    </Box>
  );
}
