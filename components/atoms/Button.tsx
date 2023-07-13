'use client';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import { useTheme } from '@mui/material';

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <MuiButton
      sx={{
        '&.MuiButton-root': {
          padding: '10.25px 40px',
          [theme.breakpoints.up('lg')]: {
            minWidth: '140px',
            padding: '12.75px 48px',
          },
        },
      }}
      {...props}
    />
  );
};
