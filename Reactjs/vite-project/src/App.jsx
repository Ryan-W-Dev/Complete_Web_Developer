import React, { useState } from 'react'; // import React and useState hook from 'react' library
import CardList from './CardList'; // import CardList component
import { robots } from './robots.jsx'; // import robots data
import SearchBox from './SearchBox.jsx'; // import SearchBox component
import './index.css'; // import CSS files for styling
// App component that manages the state of the search field and filters robots based on the search input
const App = () => {
  const [searchfield, setSearchfield] = useState('');
  // useState hook to manage the state of the search field
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  // Function to handle changes in the search input and update the searchfield state
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // Render the App component with a title, SearchBox, and CardList
  return (
    <div>
      <h1 className="tc">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;

// State management is done using the useState hook, and the search functionality is implemented by filtering the robots array based on the search input. The filtered robots are then passed to the CardList component for rendering.
