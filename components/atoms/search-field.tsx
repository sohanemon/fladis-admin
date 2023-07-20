import { AccountCircle } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
  return (
    <TextField
      size='small'
      sx={{ bgcolor: '#00000005' }}
      placeholder='Do a search'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
