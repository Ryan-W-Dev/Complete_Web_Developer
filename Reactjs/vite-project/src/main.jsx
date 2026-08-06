import { createRoot } from 'react-dom/client';
import App from './containers/App.jsx';
import 'tachyons'; // import tachyons for styling

// Render the App component
createRoot(document.getElementById('root')).render(<App />);
