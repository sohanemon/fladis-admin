import { Modal } from '@/components/atoms/Modal';
import { MuiTheme } from '@/theme/MuiTheme';
import { ReactNode } from 'react';
import '../styles/main.scss';
import { poppins } from './fonts';
import ClientProvider from '@/contexts/client-provider';

export const metadata = {
  title: 'Fladis-Erp',
  description: 'Fladis Admin Panel',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} mainLayout`}>
        <ClientProvider>
          <main>{children}</main>
          <Modal />
        </ClientProvider>
      </body>
    </html>
  );
};
export default RootLayout;
