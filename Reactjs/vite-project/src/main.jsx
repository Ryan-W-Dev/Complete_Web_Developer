import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Card from './Card.jsx';
import CardList from './CardList.jsx';
import 'tachyons'; // import tachyons for styling
import { robots } from './robots.jsx'; // import robots data

// Render the CardList component with robots data
createRoot(document.getElementById('root')).render(<CardList robots={robots} />);
