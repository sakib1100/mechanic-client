import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebse.init';


const SignIn = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if(user){
    navigate('/home');
   }

const handleOnSubmit = (event) => {
  event.preventDefault();
// const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;


createUserWithEmailAndPassword(email,password)

}

    return (
        <div>
             
             <form onSubmit={handleOnSubmit} className='w-96 max-sm:w-80 border p-10 mx-auto rounded-lg shadow-lg mt-20'>
                <h1 className='text-3xl mb-4 text-center font-bold'>Sign In</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input name='name' type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Name" />
       
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input name="email" type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" />

        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
      
        <button type="submit" class="btn  btn-error mt-3">Sign In</button>
        <p className='mt-1'>Already Sign in Pls <Link to="/login">Login In </Link></p>
      </form>
   
        </div>
    );
};

export default SignIn;




 