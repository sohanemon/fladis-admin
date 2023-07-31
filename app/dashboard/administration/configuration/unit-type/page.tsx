'use client';
import { FilledButton } from '@/components/atoms/Button';
import { FilledInput } from '@/components/atoms/Input';
import { GiftModal } from '@/components/modals/gift-modal';
import UnitTable from '@/components/molecules/configuration-tables/unit-table';
import { useModalStore } from '@/zustand-store/Modal.store';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Stack } from '@mui/material';

const DocumentType = () => {
  const { setModalContent, setModalShow } = useModalStore();

  function handleAdd() {
    setModalShow(true);
    setModalContent(<GiftModal setModalShow={setModalShow}></GiftModal>);
  }
  return (
    <Box>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Unit type</h1>
          <p>
            Configuration
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Unit type</span>
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
      <UnitTable />
    </Box>
  );
};

export default DocumentType;
