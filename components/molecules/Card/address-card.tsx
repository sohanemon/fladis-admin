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
          }}
        >
          Full Name
        </Typography>
      </Stack>
    </Box>
  );
}
