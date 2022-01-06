import {MyProfile} from "./MyProfile/MyProfile";
import {Navigation} from "./Navigation/Navigation";
import s from './SideBar.module.scss'
import {useState} from "react";

export const SideBar = () => {
    return(
        <div className={s.sidebar}>

        <MyProfile name={'Alex'} avatar={'img'} />
            <Navigation />
        </div>
    )
}