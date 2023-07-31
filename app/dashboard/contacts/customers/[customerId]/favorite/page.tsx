'use client';
import FavoriteCard from '@/components/molecules/Card/favorite-card';
import { Box } from '@mui/material';

export default function Page() {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={['1fr', '1fr 1fr']}
      gap={[1, 2]}
      my={[2]}
    >
      {Array.from(Array(2)).map((_) => (
        <FavoriteCard key={_} />
      ))}
    </Box>
  );
}
