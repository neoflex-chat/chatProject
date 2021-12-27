import s from '../../SideBar.module.scss'
import clsx from 'clsx';
import {NavLink, useMatch, useResolvedPath} from "react-router-dom";
import SVG from 'react-inlinesvg';

interface Link {
    path: string,
    title: string,
    type: string
}

export const NavItem = (props: Link) => {

    let resolved = useResolvedPath(props.path);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <li>
            <span>
              <SVG
                  src={props.type}
                  className={clsx(match && s.active)}
              >
  <img src={props.type} alt={props.title}/>
</SVG>
            </span>

            <NavLink
                className={clsx([
                    s.nav_item,
                    s[props.type],
                    match && s.active
                ])}
                to={props.path}>

                {props.title}
            </NavLink>


        </li>
    )
}