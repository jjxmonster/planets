import React, { Suspense } from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header, PlanetsSection, LoadingIndicator } from './Components';
import { GlobalStyles } from './Theme/globalStyles';

import params from './particlesConfig';

const AppWrapper = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   z-index: 50;
`;
const client = new QueryClient({
   defaultOptions: {
      queries: {
         suspense: true,
      },
   },
});

const App = () => {
   return (
      <QueryClientProvider client={client}>
         <GlobalStyles />
         <Particles params={params} />
         <AppWrapper>
            <Header />
            <Suspense fallback={<LoadingIndicator />}>
               <PlanetsSection />
            </Suspense>
         </AppWrapper>
      </QueryClientProvider>
   );
};

export default App;
