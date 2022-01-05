import useStore from "./hooks/useStore";
import {observer} from "mobx-react";
import {SideBar} from "./components/SideBar/SideBar";
import './index.scss'
import './reset.css'
import { Route, Routes } from "react-router-dom";
import {Chats} from "./components/Chats/Chats";
import {Auth} from "./components/Auth/Auth";

function App() {
    const store = useStore();


    /*    useEffect(() => {
            store.load();
        }, [])*/
    return (
        <>
            {/* eslint-disable-next-line react/jsx-no-undef */}


            <Routes>
                <Route path="*" element={<div className='main_container'><><SideBar/><div>Hello</div></></div>}/>
                <Route path="/chat"
                       element={<div className='main_container'><SideBar/> <Chats /></div>}/>
                <Route path="/auth" element={<div className='main_container'><SideBar/> <Auth/></div>} />
            </Routes>

            {/*<Chats />*/}
        </>
    );
}

export default observer(App);
