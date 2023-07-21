import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NavbarIcon from '../atoms/navbar-icon';
import { Avatar, Box, Stack } from '@mui/material';
import NotificationPopover from '../atoms/popover';
export default function NavbarActions() {
  return (
    <Stack direction={'row'} gap={1}>
      <NavbarIcon Icon={CalendarMonthRoundedIcon} color='#18ACFE' />
      <NotificationPopover>
        <NavbarIcon Icon={NotificationsNoneRoundedIcon} color='#5E0084' />
      </NotificationPopover>
      <Stack
        direction={'row'}
        height={32}
        p={0.4}
        bgcolor={'#18ACFE15'}
        borderRadius={999}
        ml={1}
        gap={0.5}
      >
        <Avatar sx={{ width: 25, height: 25 }}>A</Avatar>
        <SettingsOutlinedIcon color='secondary' sx={{ p: 0.3 }} />
      </Stack>
    </Stack>
  );
}
