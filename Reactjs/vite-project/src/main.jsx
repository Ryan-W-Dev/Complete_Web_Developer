import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hello from './Hello.jsx';
import 'tachyons'; // import tachyons for styling
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
  </StrictMode>
);
