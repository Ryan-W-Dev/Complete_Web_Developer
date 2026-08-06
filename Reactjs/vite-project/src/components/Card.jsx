import React from 'react'; // import React from 'react'; // import React library
import { robots } from '../robots.jsx'; // import robots data

// Card component that takes in id, name, and email as props
const Card = ({ id, name, email }) => {
  return (
    <article className="card">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <h3>{`@${robots.find((robot) => robot.id === id).username}`}</h3>
        {/* Display username based on id */}
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
