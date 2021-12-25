import s from '../SideBar.module.scss'
import {NavItem} from "./NavItem/NavItem";

export const Navigation = (props:any) => {
    return(
        <>
            <ul className={s.nav_bar}>
                <NavItem type='home' path='/home' title={'Home'} />
                <NavItem type='chat' path='/chat' title={'Chat'} />
                <NavItem type='contact' path='/contact' title={'Contact'} />
                <NavItem type='notifications' path='/notifications' title={'notifications'} />
                <NavItem type='calendar' path='/calendar' title={'calendar'} />
                <NavItem type='settings' path='/settings' title={'settings'} />
                <NavItem type='logout' path='/logout' title={'logout'} />

            </ul>
        </>
    )
}