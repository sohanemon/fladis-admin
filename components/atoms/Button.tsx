'use client';
import { ButtonProps, Button as MuiButton } from '@mui/material';

export const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      sx={[
        { height: 40, borderRadius: '8px' },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
      {...props}
    />
  );
};

export const LightButton = (props: ButtonProps) => {
  return (
    <MuiButton
      sx={[
        {
          height: 40,
          color: '#5E0084',
          fontSize: 10,
          width: ['100%', 'max-content'],
          background: '#ECE7F5',
          px: 3,
          display: 'block',
          ml: 'auto',
          borderRadius: '5px',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
      {...props}
    />
  );
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
          bgcolor: primary ? '#5E0084' : 'white',
          display: 'flex',
          height: '37px',
          borderRadius: 2,
          color: primary ? 'white' : '#5E6175',
          paddingInline: 2,
          gap: 1,
          fontSize: 12,
          mb: '3px',
          width: ['100%', 'max-content'],
          ':hover': {
            opacity: 0.9,
            bgcolor: primary ? '#5E0084' : 'white',
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
