import useStore from "./hooks/useStore";
import {observer} from "mobx-react";
import {SideBar} from "./components/SideBar/SideBar";
import './index.scss'
import './reset.css'
import { Route, Routes } from "react-router-dom";
import {Chats} from "./components/Chats/Chats";
import {Auth} from "./components/Auth/Auth";
import {useTitle} from "./hooks/useTitle";

function App() {
    const store = useStore();
    useTitle('NeoChat');

    /*    useEffect(() => {
            store.load();
        }, [])*/
    return (

        <div className='main_container'>
            <SideBar/>
            <Routes>

                <Route path="*" element={<><div>Hello</div></>}/>
                <Route path="/chat"
                       element={ <Chats />}/>
                <Route path="/auth" element={ <Auth/>} />

            </Routes>
        </div>

    );
}

export default observer(App);
