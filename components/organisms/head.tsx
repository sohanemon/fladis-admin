import { Stack } from '@mui/material';
import { FilledButton } from '../atoms/Button';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import { FilledInput } from '../atoms/Input';

export default function Heading() {
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <div className='heading'>
        <h1>Users</h1>
        <p>
          Administration
          <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
          <span>Users</span>
        </p>
      </div>
      <Stack direction={'row'} gap={[1, 2]}>
        <FilledInput placeholder='Search' />
        <FilledButton
          icon={
            <Image
              src={`/assets/images/filter.svg`}
              alt=''
              width={20}
              height={20}
            />
          }
        >
          Filter
        </FilledButton>
        <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
          Add
        </FilledButton>
      </Stack>
    </Stack>
  );
}
