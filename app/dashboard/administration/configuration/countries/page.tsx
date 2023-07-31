'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import { GiftModal } from '@/components/modals/gift-modal';
import CountryTable from '@/components/molecules/configuration-tables/countries-table';
import { useModalStore } from '@/zustand-store/Modal.store';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack } from '@mui/material';

const Countries = () => {
  const { setModalContent, setModalShow } = useModalStore();

  function handleAdd() {
    setModalShow(true);
    setModalContent(<GiftModal setModalShow={setModalShow}></GiftModal>);
  }
  return (
    <Box>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Countries</h1>
          <p>
            Configuration
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Countries</span>
          </p>
        </div>
        <Stack direction={['column', 'row']} gap={[1, 2]}>
          <FilledInput placeholder='Search' />
          <FilledButton
            onClick={handleAdd}
            primary
            icon={<AddIcon sx={{ fontSize: 20 }} />}
          >
            Add
          </FilledButton>
        </Stack>
      </Stack>
      <CountryTable />
    </Box>
  );
};

export default Countries;
