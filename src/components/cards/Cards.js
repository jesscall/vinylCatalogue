import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
  return (
    <div className='cards'>
      <h1>{props.label}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {console.log(props.items)}
            {props.items.map(item => (
              <CardItem 
                id={item.id}
                key={'card-' + item.id}
                src={item.basic_information.cover_image}
                text={item.basic_information.title}
                label={item.basic_information.styles[0]}
                path={`/discography/${item.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
