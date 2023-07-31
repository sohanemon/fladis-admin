'use client';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { GiftModal } from '../modals/gift-modal';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useModalStore } from '@/zustand-store/Modal.store';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import * as Popover from '@radix-ui/react-popover';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Actions({
  user,
  edit_remove,
  detail_remove,
  isSupplies,
  deleteOnly,
}: {
  user?: string;
  deleteOnly?: boolean;
  detail_remove?: boolean;
  isSupplies?: boolean;
  edit_remove?: boolean;
}) {
  const { push } = useRouter();

  const data = useMemo(() => {
    if (detail_remove)
      return [
        {
          icon: <VisibilityIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Details',
          action: isSupplies
            ? () => push('/dashboard/inventory-and-products/supplies/123')
            : null,
        },
        {
          icon: <DeleteIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Remove',
        },
      ];
    if (deleteOnly)
      return [
        {
          icon: <DeleteIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Delete',
        },
      ];
    if (edit_remove)
      return [
        {
          icon: <BorderColorIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Edit',
          action: () => {
            useModalStore.setState({ modalShow: true });
            useModalStore.setState({
              modalContent: (
                <GiftModal
                  edit
                  setModalShow={useModalStore.getState().setModalShow}
                />
              ),
            });
          },
        },
        {
          icon: <DeleteIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Remove',
        },
      ];
    return [
      {
        icon: <VisibilityIcon sx={{ fill: '#CCCCCC' }} />,
        label: 'View',
      },
      {
        icon: <BorderColorIcon sx={{ fill: '#CCCCCC' }} />,
        label: 'Edit',
        action: () => push(`/dashboard/administration/users/${user}`),
      },
      {
        icon: <BlockIcon sx={{ fill: '#CCCCCC' }} />,
        label: 'Unblock this user',
      },
      {
        icon: <DeleteIcon sx={{ fill: '#CCCCCC' }} />,
        label: 'Remove',
      },
    ];
  }, [deleteOnly, detail_remove, edit_remove, isSupplies, push, user]);

  return (
    <Popover.Root>
      <Popover.Trigger
        onClick={(e) => e.stopPropagation()}
        className='action-trigger'
        asChild
      >
        <MoreHorizIcon />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='action-content'>
          {data.map((_) => (
            <div key={_.label} onClick={_.action!}>
              {_.icon} <p>{_.label}</p>
            </div>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
