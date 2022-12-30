import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebse.init';
import { signOut } from 'firebase/auth';
import { GiMechanicGarage } from 'react-icons/gi';


const Navbar = () => {

  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('https://mechanic-server-three.vercel.app/GetData')
  .then((response) => response.json())
  .then((json) => setData(json));
  },[])

  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div>
            <nav class="navbar  navbar-expand-lg shadow-lg  bg-error">
  <div class="container">
   <p className='text-5xl text-white'><GiMechanicGarage /></p>
    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse lg:justify-end  max-sm:justify-center text-center" id="navbarNav">
      <ul class="navbar-nav font-bold">
     
        <li class="nav-item">
          <Link to='/' class="nav-link mr-2" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/about' class="nav-link mr-2">About Me</Link>
        </li>
        <li class="nav-item">
          <Link to='/products' class="nav-link mr-2">Product</Link>
        </li>
        <li class="nav-item">
          <Link to="/orderList" class="nav-link mr-2"><a class="indicator tab-active">OrderList<span class="indicator-item badge">{data.length}</span></a> </Link>
        </li>
        <li class="nav-item">
          {
            user ? <Link onClick={logout} class="nav-link mr-2">LogOut</Link> : <Link to="/login" class="nav-link mr-2">Login</Link>
          }
        </li>

       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;