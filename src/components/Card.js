import React from 'react';

const Card = ({ name, publisher, image, appearance, biography, work }) => (

<div className='card'>
<div className='card-inner'>
  <div className='card-front'>
    <img src={image} alt='' />
    <h2> {name} </h2>
  </div>
  <div className='card-back'>
    <h1> {name} </h1>
    <ul>
      <li>
        <strong>Publisher:</strong> {publisher}
      </li>
      <li>
        <strong>Gender:</strong> {appearance}
      </li>
      <li>
        <strong>Full Name:</strong> {biography}
      </li>
      <li>
        <strong>Occupation:</strong> {work}
      </li>
    </ul>
  </div>
</div>
</div>
  )


export default Card;
