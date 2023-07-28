'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import { WareHouseModal } from '@/components/modals/warehouse-modal';
import WareHouseCard from '@/components/molecules/Card/ware-house-card';
import { useModalStore } from '@/zustand-store/Modal.store';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack } from '@mui/material';
import Image from 'next/image';
const Warehouses = () => {
  const { setModalShow, setModalContent } = useModalStore();
  function handleAdd() {
    setModalShow(true);
    setModalContent(<WareHouseModal setModalShow={setModalShow} />);
  }
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Warehouses</h1>
          <p>
            Administration
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Warehouses</span>
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
          <Box onClick={handleAdd}>
            <FilledButton primary icon={<AddIcon sx={{ fontSize: 20 }} />}>
              Add
            </FilledButton>
          </Box>
        </Stack>
      </Stack>
      <Box display={'grid'} gridTemplateColumns={['1fr', '1fr 1fr']} gap={3}>
        {Array.from(Array(8)).map((_) => (
          <WareHouseCard key={_} />
        ))}
      </Box>
    </Box>
  );
};

export default Warehouses;
