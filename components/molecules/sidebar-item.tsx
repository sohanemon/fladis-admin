import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

export default function SidebarList() {
  return (
    <List component='nav'>
      <ListItem></ListItem>
      <NestedListItem />
    </List>
  );
}

function ListItem() {
  return (
    <ListItemButton>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary='Drafts' />
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
