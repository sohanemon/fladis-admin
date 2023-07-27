'use client';
import { Switch as MuiSwitch, styled } from '@mui/material';
export default function Switch() {
  const SwitchMod = styled(MuiSwitch)(({ theme }) => ({
    width: 48,
    height: 25,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',

        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fff',
      width: 20,
      height: 20,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  return <SwitchMod />;
}
