import { Avatar } from '@mui/material';

export default function Notifications() {
  return (
    <section className='notification__notifications'>
      <Avatar>H</Avatar>
      <div>
        <p className='name'>John Doe</p>
        <p className='muted'>
          Lorem ipsum dolor sit amet consectetur. Et curabitur dui suspendisse
          magna.
        </p>
        <div className='timestamp'></div>
      </div>
    </section>
  );
}
