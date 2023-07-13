'use client';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconProps, SvgIconTypeMap } from '@mui/material';
import { InputProps } from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';

interface InputWithIconProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  placeholder: string;
  label: string;
}
export function InputWithIcon(props: InputWithIconProps) {
  const [focused, setFocused] = useState(false);
  function Icon({
    icon: Icon,
  }: {
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  }) {
    return <Icon color={(focused ? 'primary' : '') as any} />;
  }
  return (
    <TextField
      fullWidth
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      label={focused ? props.label?.toString() : null}
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
