'use client';
import { Box, SvgIconTypeMap } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import {
  OverridableComponent,
  OverrideProps,
} from '@mui/material/OverridableComponent';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface InputWithIconProps {
  placeholder?: string;
  label?: string;

  type?: string;
  required?: boolean;
  size?: 'small' | 'medium';
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}
export function InputWithIcon({
  size = 'small',
  required,
  ...props
}: InputWithIconProps & TextFieldProps) {
  const [focused, setFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  function Icon({
    icon: Icon,
  }: {
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  }) {
    return (
      <Icon
        color={(isError ? 'error' : focused ? 'primary' : '') as any}
        fontSize='small'
      />
    );
  }
  return (
    <TextField
      {...props}
      fullWidth
      type={props.type}
      size={size}
      error={isError}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      label={
        focused ? (
          <>
            {props.label?.toString()}
            {required && (
              <Box display={'inline-block'} fontSize={24} color={'red'}>
                *
              </Box>
            )}
          </>
        ) : null
      }
      placeholder={focused ? props.placeholder : props.label?.toString()}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Icon icon={props.icon} />
          </InputAdornment>
        ),
      }}
      variant='outlined'
    />
  );
}

import { HtmlHTMLAttributes, forwardRef } from 'react';

interface FilledInputProps extends HtmlHTMLAttributes<HTMLInputElement> {}

const FilledInput = forwardRef<HTMLInputElement, FilledInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className='filled-input'>
        <SearchOutlinedIcon
          className='icon'
          sx={{ fill: '#E3E4E8', fontSize: 16 }}
        />
        <input ref={ref} {...props} />
      </div>
    );
  }
);

FilledInput.displayName = 'FilledInput';
export { FilledInput };
