import { Box, Paper, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function PurchaseStatus() {
  return (
    <Paper elevation={0.6} sx={{ px: 2.2, py: 1.8, height: 'fit-content' }}>
      <Typography
        sx={{
          color: '#333D49',
          fontSize: 14,
          fontWeight: '500',
        }}
      >
        Purchase statuses
      </Typography>
      <Box
        display={'grid'}
        gridTemplateColumns={['1fr 1fr 1fr 2fr']}
        alignItems={'center'}
        mt={[3, 4]}
      >
        <Typography fontSize={10}>11/05/2023</Typography>
        <Typography fontSize={10}>11:48</Typography>
        <RadioButtonUncheckedIcon
          sx={{ fill: '#F6C944', justifySelf: 'center' }}
        />
        <Typography fontSize={12} fontWeight={500}>
          Order created
        </Typography>
      </Box>
      <Box
        sx={{
          width: '2px',
          height: '34px',
          background: '#EFEFEF',
          m: '8px auto',
        }}
      />
      <Box
        display={'grid'}
        gridTemplateColumns={['1fr 1fr 1fr 2fr']}
        alignItems={'center'}
      >
        <Typography fontSize={10}>11/05/2023</Typography>
        <Typography fontSize={10}>11:48</Typography>
        <RadioButtonUncheckedIcon
          sx={{ fill: '#74CA8F', justifySelf: 'center' }}
        />
        <Typography fontSize={12} fontWeight={500}>
          Delivered
        </Typography>
      </Box>
    </Paper>
  );
}
