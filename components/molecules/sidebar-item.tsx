import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LayersIcon from '@mui/icons-material/Layers';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { SvgIconTypeMap } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ListType {
  label: string;
  slug?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  nested?: ListType[];
  inner?: boolean;
}

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
    slug: '/dashboard',
    label: 'Dashboard',
    Icon: LayersIcon,
  },
  {
    label: 'Administration',
    Icon: AdminPanelSettingsIcon,
    nested: [
      {
        Icon: FiberManualRecordIcon,
        label: 'User',
        slug: '/dashboard/administration/users',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Authorization',
        nested: [
          {
            Icon: FiberManualRecordIcon,
            label: 'Permissions',
            slug: '/dashboard/administration/authorization/permissions',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Claim Types',
            slug: '/dashboard/administration/authorization/claim-types',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Roles',
            slug: '/dashboard/administration/authorization/roles',
          },
        ],
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Configuration',
        slug: '/dashboard/administration/configuration',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Stores',
        slug: '/dashboard/administration/stores',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Warehouses',
        slug: '/dashboard/administration/warehouses',
      },
    ],
  },
];

function ListItem({
  label,
  slug,
  Icon,
  inner,
}: ListType & { inner?: boolean }) {
  const { push } = useRouter();
  return (
    <ListItemButton onClick={() => slug && push(slug)}>
      <ListItemIcon>
        <Icon sx={{ fontSize: inner ? 13 : null }} />{' '}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}
const NestedListItem = ({ label, inner, slug, Icon, nested }: ListType) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon sx={{ fontSize: inner ? 13 : null }} />
        </ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit sx={{ pl: 2 }}>
        <List component='div' disablePadding>
          {nested?.map((_) => {
            return _.nested ? (
              <NestedListItem inner key={_.label} {..._} />
            ) : (
              <ListItem inner key={_.label} {..._} />
            );
          })}
        </List>
      </Collapse>
    </>
  );
};
