import s from '../SideBar.module.scss'
import avatar from '../../../assets/images/avatar.jpg'

type Profile = {
    name: String,
    avatar: String
}

export const MyProfile = (props: Profile) => {
    return (
        <div className={s.profile_block}>

            <img src={avatar}/>
            <span>Henry Jabbawockiez</span>

        </div>
    )
}