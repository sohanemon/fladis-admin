'use client';
import { ButtonProps, Button as MuiButton } from '@mui/material';

export const Button = (props: ButtonProps) => {
  return <MuiButton {...props} />;
};

export const FilledButton = ({
  icon,
  primary,
  children,
  ...props
}: { icon?: any; primary?: boolean } & ButtonProps) => {
  return (
    <MuiButton
      sx={[
        {
          bgcolor: 'white',
          display: 'flex',
          height: '37px',
          borderRadius: 2,
          color: '#5E6175',
          paddingInline: 2,
          gap: 1,
          fontSize: 12,
          ':hover': {
            opacity: 0.9,
            bgcolor: 'white',
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
      {...props}
    >
      {icon} {children}
    </MuiButton>
  );
};
