import React from 'react'
import sfondo from '../assets/images/sfondo.jpg';
import '../styles/home.scss';

function Home() {
  return (
    <>
      <body>
        <section id='landing-section'>
          <div className='bg-overlay' />
          <div className='title-container'>
            <h1 className='title'>
              <span>I</span>
              <span>l</span>
              <span>a</span>
              <span>r</span>
              <span>i</span>
              <span>a & L</span>
              <span>e</span>
              <span>o</span>
              <span>n</span>
              <span>a</span>
              <span>r</span>
              <span>d</span>
              <span>o</span>
            </h1>
            <h2 className='subtitle'>
              <span>8 G</span>
              <span>i</span>
              <span>u</span>
              <span>g</span>
              <span>n</span>
              <span>o 2</span>
              <span>0</span>
              <span>0</span>
              <span>4</span>
            </h2>
          </div>
        </section>
      </body>
    </>

  )
}

export default Home