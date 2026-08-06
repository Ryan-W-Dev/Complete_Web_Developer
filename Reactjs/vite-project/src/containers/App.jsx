import React, { useState } from 'react';
import CardList from '../components/CardList.jsx';
import SearchBox from '../components/SearchBox.jsx';
import './index.css';
import Scroll from './scroll.jsx';

const App = () => {
  const [searchfield, setSearchfield] = useState('');
  const [robots, setRobots] = useState([]);

  // fetching data from the API and updating the robots state
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robots.length === 0) {
    return <h1 className="text-center">Loading</h1>;
  } else {
    return (
      <div>
        <h1 className="text-center">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
};

export default App;
