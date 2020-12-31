import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(props.action, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Discogs token=pcQFSpblZFQJCCrAfoykMDbfAXcqDqeUZMDOrgbb',
                'Host': 'api.discogs.com'
            }
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result[props.index]);
              console.log(result);
            },
            (error) => {
              setIsLoaded(false);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else  if (!isLoaded) {
        return <img className='loading' src="images/loading.gif" alt="loading"/>;
      } else {
        return (
            <div className="cards">
            <h1>{props.label}</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    {items.map(item => (
                        <CardItem 
                        id={item.id}
                        src={item.basic_information.cover_image}
                        text={item.basic_information.title}
                        label={item.basic_information.styles[0]}
                        path="/"
                        />
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
    }
}

export default Cards
