import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import SearchField from '../atoms/search-field';
import NavbarActions from './navbar-actions';
import { Stack } from '@mui/material';

export default function NavbarContent({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={2}
      py={1}
    >
      <IconButton
        edge='start'
        color='inherit'
        aria-label='open drawer'
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
      >
        <MenuRoundedIcon color='primary' sx={{ p: 0.3 }} />
      </IconButton>
      <SearchField />
      <NavbarActions />
    </Stack>
  );
}
