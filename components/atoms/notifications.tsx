import { Avatar } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
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
        <div className='timestamp'>
          <AccessTimeFilledIcon
            sx={{ color: '#CCC', width: '12px', height: '12px' }}
          />
          <p>2 days ago</p>
        </div>
      </div>
    </section>
  );
}
