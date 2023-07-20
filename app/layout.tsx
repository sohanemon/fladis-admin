import { Modal } from '@/components/atoms/Modal';
import ClientProvider from '@/contexts/client-provider';
import { ReactNode } from 'react';
import '../styles/main.scss';
import { poppins } from './fonts';

export const metadata = {
  title: 'Fladis-Erp',
  description: 'Fladis Admin Panel',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${poppins.variable} mainLayout`}>
        <ClientProvider>
          <main>{children}</main>
          <Modal />
        </ClientProvider>
      </body>
    </html>
  );
};
export default RootLayout;
