import React from 'react';
import About from './About';
import Footer from './Footer';

import Products from './Products';
import Service from './Service';
const Home = () => {
    return (     
       
<div>
<div class="hero min-h-screen"  style={{ backgroundImage: `url('https://i.ibb.co/Kzs9qC6/profile1.jpg')` }}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Make Your Car Last Longer</h1>
      <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-error text-white">Get Started</button>
    </div>
  </div>
</div>



<Service />

<About />

<Products />





</div>
    );
};

export default Home;