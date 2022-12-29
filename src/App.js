import { Route, Routes } from 'react-router';
import Navbar from './Compunent/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home';
import Login from './Pages/Login';
import OrderList from './Pages/OrderList';
import Product from './Pages/Product';
import Products from './Pages/Products';
import RequireAuth from './Pages/RequireAuth';
import SignIn from './Pages/SignIn';
import About from './Pages/About';

function App() {
  return (
     <div>
     
<Navbar />

<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/product' element={<Product></Product>}></Route>
  <Route path='/products' element={<Products></Products>}></Route>
  <Route path='/orderList' element={
    <RequireAuth>
      <OrderList></OrderList>
    </RequireAuth>
  }></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signin' element={<SignIn></SignIn>}></Route>
</Routes>
<ToastContainer />

    </div>
  );
}

export default App;