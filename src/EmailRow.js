import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Checkbox, IconButton } from '@mui/material';
import './EmailRow.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice'

function EmailRow({id,title,subject,description,time}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
      dispatch(selectMail({
        id,
        title,
        subject,
        description,
        time,
      }));
      navigate('/mail');
    };
   
  return (
    <div onClick={openMail} className='email__row'>
      <div className='email__row__options'>
        <Checkbox/>
        <IconButton>
            <StarBorderIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantIcon/>
        </IconButton>
      </div>
      <div className='email__row__title'> 
        <h3>{title}</h3>
      </div>
      <div className='email__row__message'>
        <h4>
            {subject}
            <span className='email__row__description'>
                -
                {description}
            </span>
        </h4>
      </div>    

      <div className='email__row__time'>
        {time}
      </div>
    </div>
  )
}

export default EmailRow
