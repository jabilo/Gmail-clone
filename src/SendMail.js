import React from 'react'
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import  db from './firebase'
import firebase from 'firebase/compat/app'

function SendMail() {

  const doc = db.collection('emails');
  console.log(doc);

  const {register, handleSubmit, formState: { errors },} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    
    db.collection('emails').add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
    })
    console.log('data sent :)');

    dispatch(closeSendMessage());

  }

  return (
    <div className='sendMail'>
      <div className='sendMail__header'> 
        <h3>New Message</h3>
        <IconButton onClick={() => dispatch(closeSendMessage())}>
        <CloseIcon  className='sendMail__closeIcon' />
        </IconButton>
       
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' className='form-control container my-2' placeholder='To' type='text' {...register('to',{required:true})}/>
        {errors.to && <p className='sendMail__error'>To is Required!</p>}
        <input name='subject' className='form-control container my-2' placeholder='Subject' type='text' {...register('subject')}/>
        <input name='message' className='sendMail__message form-control container' placeholder='Message...' type='text' {...register('message')} />

        <div className='sendMail__options'>
            <Button
                className='sendMail__send container'
                variant='contained'
                color='primary'
                type='submit'
            >Send</Button>
        </div>
      </form>

    </div>
  )
}

export default SendMail
