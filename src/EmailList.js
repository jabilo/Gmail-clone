import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import db from './firebase';

function EmailList() {
    const [emails,setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id:doc.id,
            data:doc.data(),
        }))))
    },[])
  return (
    <div className='email__list'>
        <div className='email__list__settings'>
            <div className='email__list__settingsLeft'> 
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='email__list__settingsRight'> 
                <Checkbox/>
                <IconButton>
                   <ChevronLeftIcon/>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
        </div>
        <div className='email__list__sections'> 
            <Section Icon={InboxIcon} title="primary" color="red" selected="true"/>
            <Section Icon={PeopleIcon} title="Social" color="#1A73E8" selected="false" />
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" selected='false' />
        </div>  

        <div className='email__list__'>
            {emails.map(({id,data:{to,subject,message,timestamp}}) => (
                <EmailRow
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time = {new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            <EmailRow title="jabilo" subject="request for leave" description="want leave !" time="9:25"/>
        </div>
    </div>
  )
}

export default EmailList
