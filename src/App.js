import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import { Email } from '@mui/icons-material';
import Mail from './Mail';
import SendMail from './SendMail';
import {  useDispatch, useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice'
import Login from './Login'
import {selectUser} from './features/userSlice'
import {auth} from './firebase'
import {login} from './features/userSlice'


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(
          login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        })
        )
      }
      
    })
  },[])
  return (
    // <>
    // <Login/>
    // </>
    <Router>
     {!user ? (
      <Login/>
     ) : (

        <div className="App">
          
          <Header/>
          <div className='app__body'>
            <Sidebar/>
            <Routes>
              <Route  path='/mail' element={<Mail/>}/>
              <Route  path='/' element={<EmailList/>}/>
            </Routes>
          </div>  
          {sendMessageIsOpen &&  <SendMail/>}
        
      </div>
     )}
     
    </Router>
  
  );
}

export default App;
