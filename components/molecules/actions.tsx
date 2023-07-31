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
  isGiftType,
  isCustomerType,
  isSupplies,
  isClaimType,
}: {
  user?: string;
  isClaimType?: boolean;
  isCustomerType?: boolean;
  isSupplies?: boolean;
  isGiftType?: boolean;
}) {
  const { push } = useRouter();

  const data = useMemo(() => {
    if (isCustomerType)
      return [
        {
          icon: <VisibilityIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Details',
        },
        {
          icon: <DeleteIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Remove',
        },
      ];
    if (isClaimType)
      return [
        {
          icon: <DeleteIcon sx={{ fill: '#CCCCCC' }} />,
          label: 'Delete',
        },
      ];
    if (isGiftType)
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
  }, [isClaimType, isCustomerType, isGiftType, push, user]);

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
            <div key={_.label} onClick={_.action}>
              {_.icon} <p>{_.label}</p>
            </div>
          ))}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
