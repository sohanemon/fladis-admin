import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppins',
  fallback: ['Poppins', 'sans-serif', 'system-ui', 'arial'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
