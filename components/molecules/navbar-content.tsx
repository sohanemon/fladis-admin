import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavbarContent({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: () => void;
}) {
  return (
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
      }}
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
        <MenuIcon />
      </IconButton>
      <Typography
        component='h1'
        variant='h6'
        color='inherit'
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Dashboard
      </Typography>
      <IconButton color='inherit'>
        <Badge badgeContent={4} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  );
}
