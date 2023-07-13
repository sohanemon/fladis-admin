'use client';
import { Typography, TypographyProps } from '@mui/material';

export function Text(props: TypographyProps) {
  return <Typography style={{ fontFamily: 'var(--poppins)' }} {...props} />;
}
