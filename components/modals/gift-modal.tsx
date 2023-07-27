'use client';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/material';
import { Uploader } from '../atoms/uploader';
import PersonIcon from '@mui/icons-material/Person';
import { InputWithIcon } from '../atoms/Input';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '../atoms/Button';

export function GiftModal({
  setModalShow,
  edit,
}: {
  setModalShow?: (state: boolean) => void;
  edit?: boolean;
}) {
  return (
    <>
      <Stack justifyContent={'space-between'} direction={'row'}>
        <div>
          <h3
            style={{
              color: '#333D49',
              fontSize: 14,
            }}
          >
            {edit ? 'Edit' : 'Add'} Gift Type
          </h3>
          <p
            style={{
              color: '#A5A5A5',
              fontSize: 12,
            }}
          >
            Image
          </p>
        </div>
        <CloseIcon
          onClick={() => setModalShow!(false)}
          sx={{ fontSize: 16, color: '#B6B6B6', cursor: 'pointer' }}
        />
      </Stack>
      <Uploader sx={{ mb: 2 }} />
      <p
        style={{
          textAlign: 'center',
          color: '#CBCBCB',
          fontSize: 10,
        }}
      >
        Allowed file types: png, jpg, jpeg.
      </p>
      <Stack my={[1, 2, 4]} spacing={[1, 2]}>
        <InputWithIcon icon={PersonIcon} required label='Name' />
        <InputWithIcon
          multiline
          sx={{
            '& .MuiInputBase-root': {
              alignItems: 'start',
            },
            '& .MuiSvgIcon-root': {
              mt: 3,
            },
          }}
          rows={5}
          icon={CreateIcon}
          required
          label='Description'
        />
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
