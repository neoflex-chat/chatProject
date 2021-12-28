import s from '../Chats.module.scss'
import SVG from "react-inlinesvg";
import statusImage from '../../../assets/images/chat.svg'

interface Message {
    avatar: string,
    name: string,
    status: string,
    message: string,
    messagesCount: number,
    lastMessageTime: string
}

export const DialogCard = (props: Message) => {
    return (
        <div className={s.dialog_card}>
            <div className={s.card_title}>
                <div className={s.companion_info}>
            <span>
                <img src={props.avatar}/>
            </span>
                    <div className={s.companion_block}>
                <span className={s.companion_name}>
                    {props.name}
                </span>
                        <span className={s.status}>
                   <SVG src={statusImage}/>
                            {props.status}
                </span>
                    </div>

                </div>
                <div>
                <span className={s.last_message_time}>
                    {props.lastMessageTime}
                </span>
                </div>
            </div>
            <div className={s.card_message}>

                <span className={s.message_text}>
                    {props.message}
                </span>
                <div className={s.messages_count}>
                    <span>{props.messagesCount}</span>
                </div>

            </div>

        </div>
    )
}