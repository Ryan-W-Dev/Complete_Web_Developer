import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './Card.jsx';
import App from './App.jsx';
import 'tachyons'; // import tachyons for styling
import { robots } from './robots.jsx'; // import robots data

// Render the App component
createRoot(document.getElementById('root')).render(<App />);
