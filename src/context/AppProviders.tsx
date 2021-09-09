import React from 'react';
import { UserProvider } from './userContext';

function AppProviders({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}

export default AppProviders;
