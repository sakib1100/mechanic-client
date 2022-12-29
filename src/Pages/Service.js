import React from 'react';
import { GiMechanicGarage } from 'react-icons/gi';
import { SiSourceengine } from 'react-icons/si';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
const Service = () => {
    return (
        <div>

<div class="bg-gray-200 px-10 font-san py-20 max-sm:gap-5 w-full flex flex-row max-sm:grid   mx-auto justify-center items-center">
  <div class="card w-96 max-sm:w-72 mx-auto py-10 bg-white  shadow-xl hover:shadow">
<GiMechanicGarage className='text-center mx-auto text-6xl' />
     <div class="text-center font-bold  text-3xl py-1 ">Smart Repair</div>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>
         Front end Developer, avid reader. Love to take a long walk, swim
       </p>
     </div> 
  </div>


  <div class="card w-96  max-sm:w-72 mx-auto py-10 bg-white  shadow-xl hover:shadow">
<SiSourceengine className='text-center mx-auto text-6xl' />
     <div class="text-center font-bold  text-3xl py-1 ">Engine Check</div>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>
        We perform as per the requirement of our customer and we realize their observance happiness.
       </p>
     </div> 
  </div>


  <div class="card w-96  max-sm:w-72 mx-auto py-10 bg-white  shadow-xl hover:shadow">
<MdOutlineSettingsSuggest className='text-center mx-auto text-6xl' />
     <div class="text-center font-bold  text-3xl py-1 ">Quick Exchange Part</div>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>
        We perform as per the requirement of our customer and we realize their observance happiness.
       </p>
     </div> 
  </div>


</div>
        </div>
    );
};

export default Service;