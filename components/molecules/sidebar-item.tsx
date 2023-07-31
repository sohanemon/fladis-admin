'use client';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LayersIcon from '@mui/icons-material/Layers';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { SvgIconTypeMap } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { usePathname, useRouter } from 'next/navigation';
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
    slug: '/dashboard/administration',
    nested: [
      {
        Icon: FiberManualRecordIcon,
        label: 'User',
        slug: '/dashboard/administration/users',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Authorization',
        slug: '/dashboard/administration/authorization',
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
        nested: [
          {
            Icon: FiberManualRecordIcon,
            label: 'Categories',
            slug: '/dashboard/administration/configuration/categories',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Gift Types',
            slug: '/dashboard/administration/configuration/gift-types',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Packaging Type',
            slug: '/dashboard/administration/configuration/packaging-type',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Document Type',
            slug: '/dashboard/administration/configuration/document-type',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Unit Type',
            slug: '/dashboard/administration/configuration/unit-type',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'VAT Type',
            slug: '/dashboard/administration/configuration/VAT-type',
          },
          {
            Icon: FiberManualRecordIcon,
            label: 'Countries',
            slug: '/dashboard/administration/configuration/countries',
          },
        ],
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
  {
    label: 'Contacts',
    Icon: RecentActorsIcon,
    slug: '/dashboard/contacts',
    nested: [
      {
        Icon: FiberManualRecordIcon,
        label: 'Customers',
        slug: '/dashboard/contacts/customers',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Suppliers',
        slug: '/dashboard/contacts/suppliers',
      },
    ],
  },
  {
    label: 'Inventory',
    Icon: WidgetsIcon,
    slug: '/dashboard/inventory-and-products',
    nested: [
      {
        Icon: FiberManualRecordIcon,
        label: 'Products',
        slug: '/dashboard/inventory-and-products/products',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Supplies',
        slug: '/dashboard/inventory-and-products/supplies',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Stock',
        slug: '/dashboard/inventory-and-products/stock',
      },

      {
        Icon: FiberManualRecordIcon,
        label: 'Production & Transfor...',
        slug: '/dashboard/inventory-and-products/production-and-transformation',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Coupons',
        slug: '/dashboard/inventory-and-products/coupons',
      },
      {
        Icon: FiberManualRecordIcon,
        label: 'Gift cards',
        slug: '/dashboard/inventory-and-products/gift-cards',
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
  const path = usePathname();
  return (
    <ListItemButton onClick={() => slug && push(slug)}>
      <ListItemIcon>
        <Icon
          sx={{
            fontSize: inner ? 10 : null,
            color: path.includes(slug!) ? '#5E0084' : '#A5A5A5',
          }}
        />{' '}
      </ListItemIcon>
      <ListItemText
        sx={{
          '& *': { fontSize: '14px !important' },
          color: path.includes(slug!) ? '#5E0084' : '#A5A5A5',
        }}
        primary={label}
      />
    </ListItemButton>
  );
}
const NestedListItem = ({ label, inner, slug, Icon, nested }: ListType) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon
            sx={{
              fontSize: inner ? 10 : null,
              color: path.includes(slug!) ? '#5E0084' : '#A5A5A5',
            }}
          />
        </ListItemIcon>
        <ListItemText
          sx={{
            '& *': { fontSize: '14px !important' },
            color: path.includes(slug!) ? '#5E0084' : '#A5A5A5',
          }}
          primary={label}
        />
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
