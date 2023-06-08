import React from 'react';
import MainNavigator from './src/navigation/MainNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigator />
    </QueryClientProvider>
  );
}

export default App;
