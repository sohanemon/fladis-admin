'use client';
import { Box, BoxProps } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';

interface TabsProps extends BoxProps {
  tabs: { label: string; link?: string }[];
}

const Tabs = forwardRef<BoxProps, TabsProps>(({ tabs, ...props }, ref) => {
  const path = usePathname();
  return (
    <Box
      ref={ref}
      {...props}
      sx={[
        {
          borderRadius: '5px',
          display: 'flex',
          width: '100%',
          overflow: 'auto',
          px: '21px',
          mb: 3,
          gap: 4,
          background: 'white',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {tabs.map((_) => (
        <Link
          style={{
            color: path.includes(_.link!) ? '#5E0084' : '#A5A5A5',
            fontSize: 14,
            display: 'block',
            paddingTop: '10px',
            paddingBottom: '6px',
            fontWeight: 500,
            textTransform: 'capitalize',
            whiteSpace: 'nowrap',
            borderBottom: '4px solid',
            borderColor: path.includes(_.link!) ? '#5E0084' : 'transparent',
          }}
          key={_.label}
          href={_.link!}
        >
          {_.label}
        </Link>
      ))}
    </Box>
  );
});

Tabs.displayName = 'Tabs';
export { Tabs };
