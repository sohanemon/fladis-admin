import { Dialog, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export function ModalWrapper() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog open fullScreen={fullScreen}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro
      voluptate cupiditate nisi expedita ea nobis illum aspernatur itaque,
      veritatis dolor ex modi minima, quas repudiandae tenetur ab officia
      provident!
    </Dialog>
  );
}
