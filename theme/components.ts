import { Components } from '@mui/material';

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: { scrollBehavior: 'smooth' },
      p: { lineHeight: 1.75 },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: () => ({
        fontFamily: 'inherit',
        fontWeight: 500,
        fontSize: '14px',
        boxShadow: 'none',
        borderRadius: '5px',
        textTransform: 'capitalize',
        '&:hover': {
          boxShadow: 'none',
        },
      }),
    },
  },
};
