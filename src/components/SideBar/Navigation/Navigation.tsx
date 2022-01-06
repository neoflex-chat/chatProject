import s from '../SideBar.module.scss'
import {NavItem} from "./NavItem/NavItem";

import bell from '../../../assets/images/menu/bell.svg'
import settings from '../../../assets/images/menu/settings.svg'
import power from '../../../assets/images/menu/power.svg'
import messageCircle from '../../../assets/images/menu/message-circle.svg'
import grid from '../../../assets/images/menu/grid.svg'
import calendar from '../../../assets/images/menu/calendar.svg'
import person from '../../../assets/images/menu/person.svg'
import {routes} from "../../../configs/routes";


export const Navigation = (props:any) => {
    return(
        <>
            <ul className={s.nav_bar}>
                <NavItem type={grid} path={routes.HOME} title={'home'} />
                <NavItem type={messageCircle} path={routes.CHAT} title={'chat'} />
                <NavItem type={person} path={routes.CONTACT} title={'contact'} />
                <NavItem type={bell} path={routes.NOTIFICATIONS} title={'notifications'} />
                <NavItem type={calendar} path={routes.CALENDAR} title={'calendar'} />
                <NavItem type={settings} path={routes.SETTINGS} title={'settings'} />
                <NavItem type={power} path={routes.LOGOUT} title={'logout'} />

            </ul>
        </>
    )
}