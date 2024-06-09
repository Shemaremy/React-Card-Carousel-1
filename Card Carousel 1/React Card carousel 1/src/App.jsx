import React from 'react';
import './App.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }; 


return (
  <>
    <div className='Library'>
      <h1>Anita MAx Winn !!</h1>
      <Carousel responsive={responsive}>
        <div className='Trend'>Item 1</div>
        <div className='Trend'>Item 2</div>
        <div className='Trend'>Item 3</div>
        <div className='Trend'>Item 4</div>
        <div className='Trend'>Item 5</div>
        <div className='Trend'>Item 6</div>
        <div className='Trend'>Item 7</div>
        <div className='Trend'>Item 8</div>
      </Carousel>
    </div>
  </>
);

}

export default App;