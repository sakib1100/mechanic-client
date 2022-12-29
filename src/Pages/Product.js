import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Product = ({pd}) => {
  const {id,name,img,price} = pd;

const handleAddToProduct = () => {

  fetch('http://localhost:5000/dataInsert', {
    method: 'POST',
    body: JSON.stringify({
   name,price, img
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      toast('Product Inserted Successfully')
    });
  
}

    return (
        <div>
    <div class="w-72  p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img class="w-64 h-40 object-cover rounded-t-md" src={img} alt="" />
    <div class="mt-4">
      <h1  class="text-2xl font-bold text-gray-700">{name}</h1>
      
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button class="block text-xl font-semibold text-gray-700 cursor-auto">{price}</button>
        <button  onClick={() => handleAddToProduct(pd)}  class="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-error rounded-lg shadow hover:shadow-md transition duration-300">Add To Cart</button>
      </div>
    </div>
  </div>
  


  
</div>

      
    );
};

export default Product;
