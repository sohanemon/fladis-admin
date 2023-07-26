import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';
import { forwardRef } from 'react';

interface SelectProps extends FormControlProps {
  label: string;
}

const Select = forwardRef<FormControlProps, SelectProps>(
  ({ label, ...props }, ref) => {
    return (
      <FormControl fullWidth size='small' {...props}>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <MuiSelect size='small' label={label}>
          <MenuItem value={1}>Test</MenuItem>
          <MenuItem value={2}>Test</MenuItem>
          <MenuItem value={3}>Test</MenuItem>
        </MuiSelect>
      </FormControl>
    );
  }
);

Select.displayName = 'Select';
export { Select };
