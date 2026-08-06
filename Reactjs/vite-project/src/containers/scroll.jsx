import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: 'scroll',
        border: '1px solid black',
        height: '500px',
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
      {props.children}
    </div>
  );
};

export default Scroll;
