import { Box, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export default function NavbarIcon({
  Icon,
  color,
}: {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  color: any;
}) {
  return (
    <Box bgcolor={color + '15'} borderRadius={1.4} p={0.3} height={30}>
      <Icon sx={{ color, padding: 0.2 }} />
    </Box>
  );
}
