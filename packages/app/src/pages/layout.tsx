import * as React from 'react';
import { ThemeProvider } from '@menseb/theme';
import { Footer, Header, Main } from '../containers';

export default function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
