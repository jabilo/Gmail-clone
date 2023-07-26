import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css';
import { AddAPhoto, Duo, NearMe } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
  const dispatch = useDispatch();
  return (
    <>
    <div className='sidebar'>
      <Button startIcon={<AddIcon fontSize='large'/>} className='sidebar__compose'
        onClick={() => dispatch(openSendMessage())}
      >Compose</Button>
    

    <SidebarOption Icon={MailIcon} title={'Inbox'} number={12}/>
    <SidebarOption Icon={StarIcon} title={'Starred'} number={12}/>
    <SidebarOption Icon={AccessTimeIcon} title={'Snoozed'} number={12}/>
    <SidebarOption Icon={LabelImportantIcon} title={'Important'} number={12}/>
    <SidebarOption Icon={NearMeIcon} title={'Sent'} number={12}/>
    <SidebarOption Icon={NoteIcon} title={'Drafts'} number={12}/>
    <SidebarOption Icon={ExpandMoreIcon} title={'More'} number={12}/>
    <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
            <IconButton>
                <PersonIcon/>
            </IconButton>
            <IconButton>
                <DuoIcon/>
            </IconButton>
            <IconButton>
                <PhoneIcon/>
            </IconButton>
        </div>
    </div>
    </div>
    </>
  )
}

export default Sidebar
