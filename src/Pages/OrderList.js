import React, { useEffect, useState } from 'react';
import Order from './Order';

const OrderList = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('https://mechanic-server-three.vercel.app/GetData')
  .then((response) => response.json())
  .then((json) => setData(json));
  },[])



    return (
        <div>
         
<div className='grid lg:grid-cols-2 pb-10 max-sm:grid-cols-1 max-sm:px-20 lg:px-40 gap-5 mt-10'>
{
            data.map(prd => <Order 
            key={prd._id}
            prd={prd}
            data={data}
            setData={setData}
            ></Order>)
          }
</div>


        </div>
    );
};

export default OrderList;