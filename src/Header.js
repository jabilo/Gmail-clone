import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import Avatar from '@mui/material/Avatar';
import App from './App';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from './features/userSlice';
import {auth} from './firebase';
import {logout} from './features/userSlice'

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    })
  }
  return (
    <div className='header'>
     
      <div className='header__left'>
        <IconButton>
            <MenuIcon  />
        </IconButton>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png' alt='icon' />
      </div>
      <div className='header__middle'>
        <SearchIcon/>
        <input className=''/>
        <ArrowDropDownIcon/>
      </div>
      <div className='header__right'>
        <IconButton>
            <AppsIcon/>
        </IconButton>
        <IconButton>
            <NotificationsIcon/>
        </IconButton>
        <IconButton onClick={signOut}>
            <ExitToAppIcon/>
        </IconButton>
        <Avatar className='avatar'  src={user?.photoUrl}/>
      </div>
    </div>
  )
}

export default Header
