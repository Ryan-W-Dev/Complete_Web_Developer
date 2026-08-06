import React, { useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.jsx';
import './index.css';

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
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div>
        <h1 className="tc">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <div
          style={{
            overflow: 'scroll',
            border: '1px solid black',
            height: '500px',
            width: '800px',
            margin: '0 auto',
            backgroundColor: 'lightblue',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <CardList robots={filteredRobots} />
        </div>
      </div>
    );
  }
};

export default App;
