import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Product from './Product';

const Products = () => {
    const [product,setProduct] = useState([]);
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
                <div class="min-h-screen my-20 max-sm:mb-10 mx-40 grid lg:grid-cols-3 max-sm:mx-40   gap-5 justify-center items-center">
            {
                product.map(pd => <Product
                key={pd.id}
                pd={pd}
                
                ></Product>) 
            }
            </div>
        <Footer />
        </div>
    );
};

export default Products;