import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';
import { components } from './components';
import { themeColors } from './themeColors.bak';
import { typography } from './typography';
import { CssBaseline } from '@mui/material';

type MuiThemeProps = {
  children?: ReactNode;
};

export const MuiTheme: FC<MuiThemeProps> = ({ children }) => {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 680,
        md: 960,
        lg: 1280,
        xl: 1400,
      },
    },
    components,
    typography,
    palette: {
      ...themeColors,
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
