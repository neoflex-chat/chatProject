import s from '../SideBar.module.scss'
import avatar from '../../../assets/images/avatar.jpg'
import {useState} from "react";
import {NavLink} from "react-router-dom";

type Profile = {
    name: String,
    avatar: String
}

export const MyProfile = (props: Profile) => {
    const [isLogin,logIn] = useState(0)
    return (
        <div className={s.profile_block}>
            {isLogin? <><img src={avatar}/><span>Henry Jabbawockiez</span></>:<NavLink to='/auth'>Register</NavLink>}


        </div>
    )
}