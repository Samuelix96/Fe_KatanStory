/** @format */

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './carousels.css';

const Carousels = () => {
  const redirectMuseum = () => {
    window.location.href = `/museum`;
  };

  return (
    <div>
      <div className='caro-back'>
        <h2>
          Allow me to tell you the story and myth of one of the most famous
          samurai and masters in the world "Musashi Miyamoto".
        </h2>
        <button
          onClick={redirectMuseum}
          class='button type1'>
          <span class='btn-txt'>Read more in our Museum</span>
        </button>
      </div>
      <div className=' my-4 container-fluid'>
        <Carousel
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
          stopOnHover={false}
          className='box-height'
          autoPlay={true}
          transitionTime={2000}
          interval={5000}
          infiniteLoop={true}>
          <div>
            <img
              className='caro-img bg-bla'
              src='https://dondon.media/wp-content/uploads/2023/02/combat-miyamoto-musashi-sasaki-kojiro-1024x493.png'
            />
          </div>
          <div>
            <img
              className='caro-img'
              src='https://temizen.zenworld.eu/images/approfondimenti/musashi-lato-spirituale-combattimento/musashi-lato-spirituale-combattimento-01.jpg'
            />
          </div>
          <div>
            <img
              className='caro-img'
              src='https://foreignpolicyi.org/wp-content/uploads/2018/06/Battle-of-Okehazama-956x500.jpg'
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;
