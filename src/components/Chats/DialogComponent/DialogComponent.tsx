import style from './DialogComponent.module.scss'
import { ReactComponent as AttachImage } from '../../../assets/images/attach.svg'
import { ReactComponent as MoreOptions } from '../../../assets/images/other-options.svg'
import clsx from 'clsx'
import { Menu, Dropdown, Input } from 'antd'
import { ReactComponent as PlusImage } from '../../../assets/images/chat/plus.svg'
import { ReactComponent as PictureImage } from '../../../assets/images/chat/picture.svg'
import { ReactComponent as FilmImage } from '../../../assets/images/chat/film.svg'
import { ReactComponent as FileImage } from '../../../assets/images/chat/file.svg'
import { ReactComponent as SmileImage } from '../../../assets/images/chat/smile.svg'
import { ReactComponent as SendImage } from '../../../assets/images/chat/send.svg'
const { TextArea } = Input;

type DialogProps = {
  companionName: string
  companionLastTimeSeen: string
  companionAvatar: string
}
const menu = (
  <Menu>
    <Menu.Item>
      <div
        className={clsx([style.attach_button, style.attach_button_dropdown])}
      >
        <FilmImage />
      </div>
    </Menu.Item>
    <Menu.Item>
      <div
        className={clsx([style.attach_button, style.attach_button_dropdown])}
      >
        <PictureImage />
      </div>
    </Menu.Item>
    <Menu.Item>
      <div
        className={clsx([style.attach_button, style.attach_button_dropdown])}
      >
        <FileImage />
      </div>
    </Menu.Item>
  </Menu>
)
export const DialogComponent = ({
  companionName,
  companionLastTimeSeen,
  companionAvatar,
}: DialogProps) => {
  return (
    <div className={style.my_container}>
      <div className={style.header}>
        <div className={style.companion_info}>
          <div className={style.companion_avatar}>
            <img
              src={companionAvatar}
              className={style.companion_image}
              alt={'companion image'}
            />
          </div>
          <div className={style.companion_info}>
            <span className={style.name}>{companionName}</span>
            <span className={style.lastTimeSeen}>{companionLastTimeSeen}</span>
          </div>
        </div>
        <div className={style.options_block}>
          <div className={clsx([style.menu_button, style.attachment])}>
            <AttachImage />
          </div>
          <div className={clsx([style.menu_button, style.another_options])}>
            <MoreOptions />
          </div>
        </div>
      </div>
      <div className={style.content}>content</div>
      <div className={style.footer}>
        <div className={style.attach}>
          <Dropdown overlay={menu} placement="topCenter">
            <div className={style.attach_button}>
              <PlusImage />
            </div>
          </Dropdown>
        </div>
        <div className={style.message_box}>

          <TextArea placeholder="Type a message here" autoSize={{ minRows: 2, maxRows: 6 }} /></div>
        <div className={style.smiles_button}><SmileImage /></div>
        <div className={style.send_message}> <SendImage /></div>
      </div>
    </div>
  )
}
