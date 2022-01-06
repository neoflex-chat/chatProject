import s from '../Chats.module.scss'
import SVG from 'react-inlinesvg'
import statusImage from '../../../assets/images/chat.svg'

interface Message {
  avatar: string
  name: string
  status: string
  message: string
  messagesCount: number
  lastMessageTime: string
}

export const DialogCard = ({
  avatar,
  name,
  status,
  lastMessageTime,
  message,
  messagesCount,
}: Message) => {
  return (
    <div className={s.dialog_card}>
      <div className={s.card_title}>
        <div className={s.companion_info}>
          <span>
            <img src={avatar} />
          </span>
          <div className={s.companion_block}>
            <span className={s.companion_name}>{name}</span>
            <span className={s.status}>
              <SVG src={statusImage} />
              {status}
            </span>
          </div>
        </div>
        <div>
          <span className={s.last_message_time}>{lastMessageTime}</span>
        </div>
      </div>
      <div className={s.card_message}>
        <span className={s.message_text}>{message}</span>
        <div className={s.messages_count}>
          <span>{messagesCount}</span>
        </div>
      </div>
    </div>
  )
}
