import s from './Chats.module.scss'

export const Chats = () => {
    return (
        <div className={s.chats_container}>
            <div className={s.chats_list}>
                <div className={s.top_content}>
                    <h2 className={s.medium_s36}>Chats</h2>
                    <button >+ &nbsp;Create New Chat</button>
                </div>
                <div className={s.search_dialog}>
                    <input type="search" placeholder={'Search'}/>
                    <div className={s.select_type}>
                    <select>
                        <option>Пункт 1</option>
                        <option>Пункт 2</option>
                    </select>
                    </div>
                </div>


            </div>
            <div className={s.user_chat}>
                user chat
            </div>
        </div>
    )
}