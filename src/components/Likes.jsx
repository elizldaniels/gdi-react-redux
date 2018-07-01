import React from 'react';

// Exercise 2: Set It Up
// write a functional component
// make it a div with a class name of Likes
// write a span and a button element inside
// export the component!

const Likes = (props) => {
	const {totalLikes} = props
  return (
    <div className="Likes">
    	<span><b>{totalLikes}</b> likes</span>
    	<span><button>like me</button></span>
    </div>
  );
};

export default Likes;

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.
