import React, { useState } from 'react';
import CardList from './CardList';
import { robots } from './robots.jsx'; // import robots data
import SearchBox from './SearchBox.jsx'; // import SearchBox component

const App = () => {
  const [searchfield, setSearchfield] = useState('');

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div>
      <h1 className="tc">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
