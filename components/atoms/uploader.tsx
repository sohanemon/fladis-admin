'use client';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';

export function Uploader({
  rounded,
  ...props
}: { rounded?: boolean } & BoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      onClick={() => inputRef.current?.click()}
      sx={[
        {
          position: 'relative',
          width: '108px',
          marginInline: 'auto',
          cursor: 'pointer',
          aspectRatio: '1/1',
          display: 'grid',
          placeContent: 'center',
          bgcolor: '#5E008420',
          borderRadius: rounded ? 999 : 0.7,
          outline: '1px dashed #E2E2E2',
          outlineOffset: 9,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <PhotoSizeSelectActualIcon
        sx={{
          filter: 'invert()',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: rounded ? 0 : -16,
          bottom: rounded ? -14 : -19,
        }}
      >
        <Image
          src={`/assets/images/user/add.svg`}
          alt=''
          width={rounded ? 21 : 24}
          height={rounded ? 21 : 24}
        />
      </Box>
      <input
        ref={inputRef}
        type='file'
        style={{
          display: 'none',
        }}
      />
    </Box>
  );
}
