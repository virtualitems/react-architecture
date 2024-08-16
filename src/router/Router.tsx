// Libraries

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components

import Home from '../pages/Home';

// Hooks

// Features

// Languages

// Styles

// Types

// Constants


/**
 * @description Router component
 *
 * @param {React.HTMLProps<HTMLElement>} props
 * @returns {React.ReactElement}
 */
export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

} //:: ReactElement
