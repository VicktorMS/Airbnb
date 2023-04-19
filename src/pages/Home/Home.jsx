import React, { useEffect, useState } from 'react';
import Banner from '/src/components/Banner/Banner'
import Card from '/src/components/Card/Card'
import navCardData from '/src/data/navigationCards.json'
import './Home.css';

function Home() {
  const [navCards, setNavCards] = useState([]);
  const [hostsCards, setHostsCards] = useState([]);
  
  useEffect(() => {
    setNavCards(navCardData);
    try {
      fetch('/public/data/cardsDataHome.json')
        .then(response => response.json())
        .then(data =>{
          setHostsCards(data.slice(0, 3));
        });
    } catch (error) {
      console.log(error);
    }
  }, [])


  return (
    <div className='Home' >
      <Banner/>
      <div className='home__section'>
       { navCards.map((card, index) => (
          <Card
           key={index + 'navCard'}
           title={card.title}
           src={card.src}
           description={card.description}
           />
        ))}
      </div>
      <div className='home__section'>
        { hostsCards.map((card, index) => (
            <Card
            key={index + 'hostCard'}
            title={card.title}
            src={card.src}
            description={card.description}
            price={card.price}
            />
          ))}
      </div>
    </div>
  )
}

export default Home