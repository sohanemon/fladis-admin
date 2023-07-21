import * as Pop from '@radix-ui/react-popover';

const NotificationPopover = ({ children }: { children: React.ReactNode }) => (
  <Pop.Root>
    <Pop.Trigger className='notification-popover__trigger'>
      {children}
    </Pop.Trigger>
    <Pop.Anchor />
    <Pop.Portal className='notification-popover__portal'>
      <Pop.Content className='notification-popover__content'>
        <div className='head'>
          <p>
            Notification
            <span className='count'>2</span>
          </p>
          <Pop.Close className='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='11'
              viewBox='0 0 18 11'
              fill='none'
            >
              <path
                d='M4.86218 5.41342L8.72396 9.27521L17 1M1 5.45267L4.86183 9.31445M13.137 1.03924L8.99938 5.17694'
                stroke='#5E0084'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </Pop.Close>
        </div>
        <hr />
      </Pop.Content>
    </Pop.Portal>
  </Pop.Root>
);

export default NotificationPopover;
