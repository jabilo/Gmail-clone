import { Icon, IconButton } from '@mui/material'
import React from 'react'
import './Mail.css'
// left
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
// right
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector } from 'react-redux';
import {selectOpenMail} from './features/mailSlice'



function Mail() {
  const navigate = useNavigate();
  const selecctedMail = useSelector(selectOpenMail);

  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__tools__left'>
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIcon/>
        </IconButton>
        <IconButton>
          <MoveToInboxIcon/>
        </IconButton>
        <IconButton>
          <ErrorIcon/>
        </IconButton>
        <IconButton>
          <DeleteIcon/>
        </IconButton>
        <IconButton>
          <MailIcon/>
        </IconButton>
        <IconButton>
          <WatchLaterIcon/>
        </IconButton>
        <IconButton>
          <CheckCircleIcon/>
        </IconButton>
        <IconButton>
          <LabelImportantIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
        </div>

        <div className='mail__tools__right'>
          {/* mail tools right */}
          <IconButton>
            <UnfoldMoreIcon/>
          </IconButton>
          <IconButton>
            <PrintIcon/>
          </IconButton>
          <IconButton>
            <ExitToAppIcon/>
          </IconButton>
        </div>

      </div>
      <div className='mail__body'>
        <div className='mail__body__header'> 
          <h2>{selecctedMail?.subject}</h2>
          <LabelImportantIcon className='mail__important'/>
          <p>{selecctedMail?.title}</p>
          <p className='mail__body__time'>{selecctedMail?.time}</p>
        </div>

        <div className='mail__body__message'>
         {selecctedMail?.description}
        </div>
      </div>
    </div>
  )
}

export default Mail
