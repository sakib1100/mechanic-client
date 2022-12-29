import React from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebse.init';

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from  = location.state?.from?.pathname || '/';
  if (user) {
    navigate(from, {replace: true });
  }


const handleOnSubmit = (event) => {
  event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;


signInWithEmailAndPassword(email,password);

}
    return (
        <div>
            
            <form onSubmit={handleOnSubmit} className='w-96 max-sm:w-80 border p-10 mx-auto rounded-lg shadow-lg mt-20'>
                <h1 className='text-3xl mb-4 text-center font-bold'>Login</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <p className='text-error'>{error?.message}</p>
        {
          loading && <p>Loadding...</p>
        }
        <button type="submit" class="btn  btn-error mt-3">Login</button>
        <p className='mt-1'>If You Are New Pls <Link to="/signin">Sign In</Link></p>
      </form>
   
        </div>
    
    );
};

export default Login;