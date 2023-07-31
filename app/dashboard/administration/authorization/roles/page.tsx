'use client';
import { Button, FilledButton } from '@/components/atoms/Button';
import { FilledInput, InputWithIcon } from '@/components/atoms/Input';
import ClaimTypesTable from '@/components/molecules/authorization-tables/claim-type';
import { useModalStore } from '@/zustand-store/Modal.store';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { Box, Stack } from '@mui/material';

const Roles = () => {
  const { setModalContent, setModalShow } = useModalStore();
  function handleAdd() {
    setModalShow(true);
    setModalContent(
      <>
        <Stack justifyContent={'space-between'} direction={'row'}>
          <div>
            <h3
              style={{
                color: '#333D49',
                fontSize: 14,
              }}
            >
              Add role
            </h3>
            <p
              style={{
                color: '#A5A5A5',
                fontSize: 12,
              }}
            >
              Write the name of the role
            </p>
          </div>
          <CloseIcon
            onClick={() => setModalShow(false)}
            sx={{ fontSize: 16, color: '#B6B6B6', cursor: 'pointer' }}
          />
        </Stack>
        <Stack my={[1, 2, 4]} spacing={[1, 2]}>
          <InputWithIcon icon={SimCardDownloadIcon} required label='Name' />
        </Stack>{' '}
        <Stack direction={'row'} justifyContent={'end'} mx={'auto'} gap='1rem'>
          <Button sx={{ px: 4 }} color='info' variant='contained'>
            Close
          </Button>
          <Button sx={{ px: 4 }} variant='contained'>
            Save
          </Button>
        </Stack>
      </>
    );
  }

  return (
    <Box>
      <Stack direction={['column', 'row']} justifyContent={'space-between'}>
        <div className='heading'>
          <h1>Roles</h1>
          <p>
            Authorization
            <FiberManualRecordIcon sx={{ width: 6, fill: '#A5A5A5' }} />
            <span>Claim types</span>
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
      <ClaimTypesTable role />
    </Box>
  );
};

export default Roles;
