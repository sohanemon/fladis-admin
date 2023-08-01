'use client';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Paper, Stack, Typography } from '@mui/material';
import { useRef } from 'react';
export default function UploadFile() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Stack
      onClick={() => inputRef.current?.click()}
      component={Paper}
      bgcolor={'#E9E8F1'}
      elevation={0.2}
      gap={0.6}
      my={1.5}
      p={[3, 4]}
      alignItems={'center'}
      sx={{ cursor: 'pointer' }}
    >
      <input type='file' style={{ display: 'none' }} ref={inputRef} />
      <UploadFileIcon sx={{ fontSize: 43, fill: '#5E0084' }} />
      <Typography
        sx={{
          fontSize: 12,
        }}
      >
        Upload
      </Typography>
      <Typography
        sx={{
          color: '#6A7685',
          fontSize: 12,
        }}
      >
        Upload documents for this purchase
      </Typography>
    </Stack>
  );
}
