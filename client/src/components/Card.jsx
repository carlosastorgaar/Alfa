import React from 'react';
import { Link } from 'react-router-dom';

function Card({title, description}) {
  return (
    <div className="Card">
      <Link to={title}>
          <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </div>
  )
}

export default Card