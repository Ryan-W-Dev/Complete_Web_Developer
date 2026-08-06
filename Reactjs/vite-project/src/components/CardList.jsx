import React from 'react';

// CardList component that takes in robots as props and maps through them to render Card components
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

import Card from './Card.jsx'; // import Card component
export default CardList;
