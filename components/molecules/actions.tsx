'use client';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { GiftModal } from '../modals/gift-modal';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useModalStore } from '@/zustand-store/Modal.store';
import * as Popover from '@radix-ui/react-popover';
export default function Actions({
  user,
  isGiftType,
  isCustomerType,
  isClaimType,
}: {
  user?: string;
  isClaimType?: boolean;
  isCustomerType?: boolean;
  isGiftType?: boolean;
}) {
  const { push } = useRouter();

  const data = useMemo(() => {
    if (isCustomerType)
      return [
        {
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
            >
              <g clip-path='url(#clip0_41_2468)'>
                <path
                  d='M12.942 6.19856C12.8674 6.01128 11.0598 1.625 6.49985 1.625C1.93989 1.625 0.132285 6.01128 0.0577383 6.19856C-0.0192461 6.39214 -0.0192461 6.60806 0.0577383 6.80164C0.132285 6.98872 1.93989 11.375 6.49985 11.375C11.0598 11.375 12.8674 6.98872 12.942 6.80144C13.0189 6.60786 13.0189 6.39214 12.942 6.19856ZM6.49985 8.125C5.60244 8.125 4.87485 7.39741 4.87485 6.5C4.87485 5.60259 5.60244 4.875 6.49985 4.875C7.39725 4.875 8.12485 5.60259 8.12485 6.5C8.12485 7.39741 7.39725 8.125 6.49985 8.125Z'
                  fill='#CCCCCC'
                />
              </g>
              <defs>
                <clipPath id='clip0_41_2468'>
                  <rect width='13' height='13' fill='white' />
                </clipPath>
              </defs>
            </svg>
          ),
          label: 'Details',
        },
        {
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='11'
              viewBox='0 0 8 11'
              fill='none'
            >
              <path
                d='M0.571429 9.77778C0.571429 10.45 1.08571 11 1.71429 11H6.28571C6.91429 11 7.42857 10.45 7.42857 9.77778V3.66667C7.42857 2.99444 6.91429 2.44444 6.28571 2.44444H1.71429C1.08571 2.44444 0.571429 2.99444 0.571429 3.66667V9.77778ZM7.42857 0.611111H6L5.59429 0.177222C5.49143 0.0672222 5.34286 0 5.19429 0H2.80571C2.65714 0 2.50857 0.0672222 2.40571 0.177222L2 0.611111H0.571429C0.257143 0.611111 0 0.886111 0 1.22222C0 1.55833 0.257143 1.83333 0.571429 1.83333H7.42857C7.74286 1.83333 8 1.55833 8 1.22222C8 0.886111 7.74286 0.611111 7.42857 0.611111Z'
                fill='#CCCCCC'
              />
            </svg>
          ),
          label: 'Remove',
        },
      ];
    if (isClaimType)
      return [
        {
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='11'
              viewBox='0 0 8 11'
              fill='none'
            >
              <path
                d='M0.571429 9.77778C0.571429 10.45 1.08571 11 1.71429 11H6.28571C6.91429 11 7.42857 10.45 7.42857 9.77778V3.66667C7.42857 2.99444 6.91429 2.44444 6.28571 2.44444H1.71429C1.08571 2.44444 0.571429 2.99444 0.571429 3.66667V9.77778ZM7.42857 0.611111H6L5.59429 0.177222C5.49143 0.0672222 5.34286 0 5.19429 0H2.80571C2.65714 0 2.50857 0.0672222 2.40571 0.177222L2 0.611111H0.571429C0.257143 0.611111 0 0.886111 0 1.22222C0 1.55833 0.257143 1.83333 0.571429 1.83333H7.42857C7.74286 1.83333 8 1.55833 8 1.22222C8 0.886111 7.74286 0.611111 7.42857 0.611111Z'
                fill='#CCCCCC'
              />
            </svg>
          ),
          label: 'Delete',
        },
      ];
    if (isGiftType)
      return [
        {
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
            >
              <path
                opacity='0.4'
                d='M13.125 13.75H1.875C1.61875 13.75 1.40625 13.5375 1.40625 13.2812C1.40625 13.025 1.61875 12.8125 1.875 12.8125H13.125C13.3813 12.8125 13.5938 13.025 13.5938 13.2812C13.5938 13.5375 13.3813 13.75 13.125 13.75Z'
                fill='#CCCCCC'
              />
              <path
                opacity='0.4'
                d='M11.8881 2.17504C10.6756 0.962537 9.4881 0.931287 8.24435 2.17504L7.4881 2.93129C7.4256 2.99379 7.4006 3.09379 7.4256 3.18129C7.9006 4.83754 9.2256 6.16254 10.8818 6.63756C10.9068 6.64381 10.9318 6.65006 10.9568 6.65006C11.0256 6.65006 11.0881 6.62506 11.1381 6.57506L11.8881 5.81879C12.5068 5.20629 12.8068 4.61254 12.8068 4.01254C12.8131 3.39379 12.5131 2.79379 11.8881 2.17504Z'
                fill='#CCCCCC'
              />
              <path
                d='M9.75619 7.20625C9.57494 7.11875 9.39994 7.03125 9.23119 6.93125C9.09369 6.85 8.96244 6.7625 8.83119 6.66875C8.72494 6.6 8.59994 6.5 8.48119 6.4C8.46869 6.39375 8.42494 6.35625 8.37494 6.30625C8.16869 6.13125 7.93744 5.90625 7.73119 5.65625C7.71244 5.64375 7.68119 5.6 7.63744 5.54375C7.57494 5.46875 7.46869 5.34375 7.37494 5.2C7.29994 5.10625 7.21244 4.96875 7.13119 4.83125C7.03119 4.6625 6.94369 4.49375 6.85619 4.31875C6.76869 4.13125 6.69994 3.95 6.63744 3.78125L2.71246 7.70625C2.63121 7.7875 2.55621 7.94375 2.53746 8.05L2.19996 10.4438C2.13746 10.8688 2.25621 11.2688 2.51871 11.5375C2.74371 11.7563 3.0562 11.875 3.39371 11.875C3.4687 11.875 3.54371 11.8688 3.61871 11.8563L6.0187 11.5188C6.1312 11.5 6.28744 11.425 6.36244 11.3437L10.2874 7.41875C10.1124 7.35625 9.94369 7.2875 9.75619 7.20625Z'
                fill='#CCCCCC'
              />
            </svg>
          ),
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
          icon: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='11'
              viewBox='0 0 8 11'
              fill='none'
            >
              <path
                d='M0.571429 9.77778C0.571429 10.45 1.08571 11 1.71429 11H6.28571C6.91429 11 7.42857 10.45 7.42857 9.77778V3.66667C7.42857 2.99444 6.91429 2.44444 6.28571 2.44444H1.71429C1.08571 2.44444 0.571429 2.99444 0.571429 3.66667V9.77778ZM7.42857 0.611111H6L5.59429 0.177222C5.49143 0.0672222 5.34286 0 5.19429 0H2.80571C2.65714 0 2.50857 0.0672222 2.40571 0.177222L2 0.611111H0.571429C0.257143 0.611111 0 0.886111 0 1.22222C0 1.55833 0.257143 1.83333 0.571429 1.83333H7.42857C7.74286 1.83333 8 1.55833 8 1.22222C8 0.886111 7.74286 0.611111 7.42857 0.611111Z'
                fill='#CCCCCC'
              />
            </svg>
          ),
          label: 'Remove',
        },
      ];
    return [
      {
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
          >
            <g clip-path='url(#clip0_41_2468)'>
              <path
                d='M12.942 6.19856C12.8674 6.01128 11.0598 1.625 6.49985 1.625C1.93989 1.625 0.132285 6.01128 0.0577383 6.19856C-0.0192461 6.39214 -0.0192461 6.60806 0.0577383 6.80164C0.132285 6.98872 1.93989 11.375 6.49985 11.375C11.0598 11.375 12.8674 6.98872 12.942 6.80144C13.0189 6.60786 13.0189 6.39214 12.942 6.19856ZM6.49985 8.125C5.60244 8.125 4.87485 7.39741 4.87485 6.5C4.87485 5.60259 5.60244 4.875 6.49985 4.875C7.39725 4.875 8.12485 5.60259 8.12485 6.5C8.12485 7.39741 7.39725 8.125 6.49985 8.125Z'
                fill='#CCCCCC'
              />
            </g>
            <defs>
              <clipPath id='clip0_41_2468'>
                <rect width='13' height='13' fill='white' />
              </clipPath>
            </defs>
          </svg>
        ),
        label: 'View',
      },
      {
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
          >
            <path
              opacity='0.4'
              d='M13.125 13.75H1.875C1.61875 13.75 1.40625 13.5375 1.40625 13.2812C1.40625 13.025 1.61875 12.8125 1.875 12.8125H13.125C13.3813 12.8125 13.5938 13.025 13.5938 13.2812C13.5938 13.5375 13.3813 13.75 13.125 13.75Z'
              fill='#CCCCCC'
            />
            <path
              opacity='0.4'
              d='M11.8881 2.17504C10.6756 0.962537 9.4881 0.931287 8.24435 2.17504L7.4881 2.93129C7.4256 2.99379 7.4006 3.09379 7.4256 3.18129C7.9006 4.83754 9.2256 6.16254 10.8818 6.63756C10.9068 6.64381 10.9318 6.65006 10.9568 6.65006C11.0256 6.65006 11.0881 6.62506 11.1381 6.57506L11.8881 5.81879C12.5068 5.20629 12.8068 4.61254 12.8068 4.01254C12.8131 3.39379 12.5131 2.79379 11.8881 2.17504Z'
              fill='#CCCCCC'
            />
            <path
              d='M9.75619 7.20625C9.57494 7.11875 9.39994 7.03125 9.23119 6.93125C9.09369 6.85 8.96244 6.7625 8.83119 6.66875C8.72494 6.6 8.59994 6.5 8.48119 6.4C8.46869 6.39375 8.42494 6.35625 8.37494 6.30625C8.16869 6.13125 7.93744 5.90625 7.73119 5.65625C7.71244 5.64375 7.68119 5.6 7.63744 5.54375C7.57494 5.46875 7.46869 5.34375 7.37494 5.2C7.29994 5.10625 7.21244 4.96875 7.13119 4.83125C7.03119 4.6625 6.94369 4.49375 6.85619 4.31875C6.76869 4.13125 6.69994 3.95 6.63744 3.78125L2.71246 7.70625C2.63121 7.7875 2.55621 7.94375 2.53746 8.05L2.19996 10.4438C2.13746 10.8688 2.25621 11.2688 2.51871 11.5375C2.74371 11.7563 3.0562 11.875 3.39371 11.875C3.4687 11.875 3.54371 11.8688 3.61871 11.8563L6.0187 11.5188C6.1312 11.5 6.28744 11.425 6.36244 11.3437L10.2874 7.41875C10.1124 7.35625 9.94369 7.2875 9.75619 7.20625Z'
              fill='#CCCCCC'
            />
          </svg>
        ),
        label: 'Edit',
        action: () => push(`/dashboard/administration/users/${user}`),
      },
      {
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M10.7123 3.28769C11.6623 4.23775 12.25 5.55025 12.25 7C12.25 9.89952 9.89952 12.25 7 12.25C5.55025 12.25 4.23775 11.6623 3.28769 10.7123M10.7123 3.28769C9.76226 2.33763 8.44976 1.75 7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 8.44976 2.33763 9.76226 3.28769 10.7123M10.7123 3.28769L3.28769 10.7123'
              stroke='#CCCCCC'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        ),
        label: 'Unblock this user',
      },
      {
        icon: (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='8'
            height='11'
            viewBox='0 0 8 11'
            fill='none'
          >
            <path
              d='M0.571429 9.77778C0.571429 10.45 1.08571 11 1.71429 11H6.28571C6.91429 11 7.42857 10.45 7.42857 9.77778V3.66667C7.42857 2.99444 6.91429 2.44444 6.28571 2.44444H1.71429C1.08571 2.44444 0.571429 2.99444 0.571429 3.66667V9.77778ZM7.42857 0.611111H6L5.59429 0.177222C5.49143 0.0672222 5.34286 0 5.19429 0H2.80571C2.65714 0 2.50857 0.0672222 2.40571 0.177222L2 0.611111H0.571429C0.257143 0.611111 0 0.886111 0 1.22222C0 1.55833 0.257143 1.83333 0.571429 1.83333H7.42857C7.74286 1.83333 8 1.55833 8 1.22222C8 0.886111 7.74286 0.611111 7.42857 0.611111Z'
              fill='#CCCCCC'
            />
          </svg>
        ),
        label: 'Remove',
      },
    ];
  }, [isClaimType, isGiftType, push, user]);

  return (
    <Popover.Root>
      <Popover.Trigger className='action-trigger' asChild>
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
