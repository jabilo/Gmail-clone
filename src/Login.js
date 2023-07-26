import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import {auth,provider} from './firebase'
import {signInWithPopup } from "firebase/auth";
import { SupportAgent } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';

function Login() {
  const dispatch = useDispatch();
  const singIn = () => {
    signInWithPopup(auth,provider)
        .then((result) => {
          dispatch(
            login({
              displayName:result.user.displayName,
              email:result.user.email,
              photoUrl:result.user.photoURL,
            })
          );
          console.log(result);
          console.log("user : ",result.user.displayName)
          console.log("user email : ",result.user.email)
          if(result.user){
            console.log('signed in :)')
          }else{
            console.log('boom ...')
          
          }
        })
  }
  return (
    <div className='login'>
   
      <div className='login__container'>
        <img src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg' alt=''/>
        <Button onClick={singIn} variant="contained" color='primary'>Sign In</Button>
      </div>
    </div>
  )
}

export default Login
