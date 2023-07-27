'use client';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as Popover from '@radix-ui/react-popover';

export default function StoreCardPopper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Popover.Root>
      <Popover.Trigger className='action-trigger' asChild>
        <MoreHorizIcon />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='action-content'>{children}</Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
