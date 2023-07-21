import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LayersIcon from '@mui/icons-material/Layers';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useState } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export default function SidebarList() {
  return (
    <List component='nav'>
      {data.map((item) => (
        <ListItem key={item.label} {...item} />
      ))}
      <NestedListItem />
    </List>
  );
}

const data = [
  {
    label: 'Dashboard',
    link: '',
    Icon: LayersIcon,
  },
  {
    label: 'Administration',
    link: 'administration',
    Icon: AdminPanelSettingsIcon,
    nested: [
      { label: 'User', link: 'user' },
      { label: 'Authorization', link: 'authorization' },
      { label: 'Configuration', link: 'configuration' },
      { label: 'Stores', link: 'stores' },
      { label: 'Warehouses', link: 'warehouses' },
    ],
  },
];

function ListItem({
  label,
  link,
  Icon,
}: {
  label: string;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}) {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon />{' '}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
const NestedListItem = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};
