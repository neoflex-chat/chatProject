import s from '../SideBar.module.scss'
import avatar from '../../../assets/images/avatar.jpg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Profile = {
  name: String
  avatar: String
}

export const MyProfile = (props: Profile) => {
  const [isLogin, logIn] = useState<boolean>(false)
  return (
    <div className={s.profile_block}>
      {isLogin ? (
        <>
          <img src={avatar} />
          <span>Henry Jabbawockiez</span>
          <h4 style={{cursor:'pointer'}} onClick={() => logIn((prev)=>!prev)}>Logout</h4>
        </>
      ) : (

        <>
          <NavLink to="/auth">Register</NavLink>
          <h4 style={{cursor:'pointer'}} onClick={() => logIn((prev)=>!prev)}>Login</h4>
        </>
      )}
    </div>
  )
}