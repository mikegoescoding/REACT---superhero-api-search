import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => (
  <div className='card-container'>
    {characters.map(({ id, name, biography, images, appearance, work }) => {
      return (
      <div className="cards">
        <Card
          key={id}
          id={id}
          name={name}
          publisher={biography.publisher}
          image={images.md}
          appearance={appearance.gender}
          biography={biography.fullName}
          work={work.occupation}
        />
      </div>
      );
    })}
  </div>
);

export default CardList;
