import {NavLink} from "react-router-dom";
import s from '../../SideBar.module.scss'

interface Link {
    path: string,
    title: string,
    type: string
}

export const NavItem = (props: Link) => {
    let styleType: string;
    switch (props.type) {
        case 'home': {
            styleType = s.home;
            break;
        }
        case 'chat': {
            styleType = s.chat;
            break;
        }
        case 'contact': {
            styleType = s.contact;
            break;
        }
        case 'notifications': {
            styleType = s.notifications;
            break;
        }
        case 'calendar': {
            styleType = s.calendar;
            break;
        }
        case 'settings': {
            styleType = s.settings;
            break;
        }
        case 'logout': {
            styleType = s.logout;
            break;
        }

    }


    return (
        <li>
            <NavLink onMouseDown={(e)=>e.preventDefault()} className={NavLink => NavLink.isActive ? `${s.nav_item} ${styleType} ${s.active}` : `${s.nav_item} ${styleType}`}
                     to={props.path}>{props.title}</NavLink>
        </li>
    )
}