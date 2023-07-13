'use client';

import { TextField, InputProps } from '@mui/material';

export default function Input(props: InputProps) {
  return <TextField sx={{ height: 47 }} {...props} />;
}
