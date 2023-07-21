import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LayersIcon from '@mui/icons-material/Layers';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useState } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export default function SidebarList() {
  return (
    <List component='nav'>
      {data.map((item) => {
        return item.nested ? (
          <NestedListItem key={item.label} {...item} />
        ) : (
          <ListItem key={item.label} {...item} />
        );
      })}
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
      { Icon: FiberManualRecordIcon, label: 'User', link: 'user' },
      {
        Icon: FiberManualRecordIcon,
        label: 'Authorization',
        link: 'authorization',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Configuration',
        link: 'configuration',
      },
      { Icon: FiberManualRecordIcon, label: 'Stores', link: 'stores' },
      { Icon: FiberManualRecordIcon, label: 'Warehouses', link: 'warehouses' },
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
const NestedListItem = ({
  label,
  link,
  Icon,
  nested,
}: {
  label: string;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  nested: {
    label: string;
    link: string;
  }[];
}) => {
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
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {nested.map((_) => (
            <ListItem key={_.label} {..._} />
          ))}
        </List>
      </Collapse>
    </>
  );
};
