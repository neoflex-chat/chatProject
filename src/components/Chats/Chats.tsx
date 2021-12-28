import s from './Chats.module.scss'
import 'antd/dist/antd.css'
import './antd.scss'
import {UserOutlined, DownOutlined, SearchOutlined} from '@ant-design/icons';
import {Menu, Dropdown, Button, message, Input} from 'antd';
import {DialogCard} from "./DialogCard/DialogCard";


const messages = [
    {
        avatar: '/images/avatar.jpg',
        name: 'Luy Robin',
        status: 'writes',
        lastMessageTime: '1 minute ago',
        message: 'Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ',
        messagesCount: 2
    },
    {
        avatar: '/images/avatar.jpg',
        name: 'Luy Robin',
        status: 'writes',
        lastMessageTime: '1 minute ago',
        message: 'Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ',
        messagesCount: 2
    },
    {
        avatar: '/images/avatar.jpg',
        name: 'Luy Robin',
        status: 'writes',
        lastMessageTime: '1 minute ago',
        message: 'Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ',
        messagesCount: 2
    },
    {
        avatar: '/images/avatar.jpg',
        name: 'Luy Robin',
        status: 'writes',
        lastMessageTime: '1 minute ago',
        message: 'Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). Most of its text is made up from sections 1.10.32–3 of Cicero\'s De finibus bonorum et malorum ' +
            '(On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ',
        messagesCount: 2
    }
]

export const Chats = () => {
    function handleMenuClick(e: any) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined/>}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined/>}>
                3rd menu item
            </Menu.Item>
        </Menu>
    );
    return (
        <div className={s.chats_container}>
            <div className={s.chats_list}>
                <div className={s.top_content}>
                    <h2 className={s.medium_s36}>Chats</h2>
                    <button>+ &nbsp;Create New Chat</button>
                </div>


                <div className={s.search_dialog}>
                    <Input size="large" placeholder="Search" prefix={<SearchOutlined/>}/>
                    <Dropdown overlay={menu}>
                        <Button>
                            Messages <DownOutlined/>
                        </Button>
                    </Dropdown>
                </div>

                <div className={s.dialogs_list}>

                    {messages.map(item => (
                        <DialogCard
                            avatar={item.avatar}
                            name={item.name}
                            status={item.status}
                            message={item.message}
                            messagesCount={item.messagesCount}
                            lastMessageTime={item.lastMessageTime}
                        />)
                    )}

                </div>


            </div>
            <div className={s.user_chat}>
                user chat
            </div>
        </div>
    )
}