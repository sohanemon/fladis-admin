'use client';
import { Typography, TypographyProps } from '@mui/material';

export default function Text(props: TypographyProps) {
  return <Typography style={{ fontFamily: 'var(--poppins)' }} {...props} />;
}
