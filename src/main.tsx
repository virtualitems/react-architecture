import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Router from './router/Router';


const element = document.getElementById('root');

if (element === null) {
  throw new Error('Root element not found');
}


createRoot(element).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
