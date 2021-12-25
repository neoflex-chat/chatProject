import useStore from "./hooks/useStore";
import {observer} from "mobx-react";
import {SideBar} from "./components/SideBar/SideBar";
import './index.scss'

import { Route, Routes} from "react-router-dom";
function App() {
    const store = useStore();


/*    useEffect(() => {
        store.load();
    }, [])*/
    return (
        <div className='main_container'>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <SideBar />

                <Routes>
                    <Route path="*" element={<div>Hello</div>}/>
                    <Route path="/home"
                           element={<div>Hello</div>}/>
                </Routes>

            {/*<Chats />*/}
        </div>
    );
}

export default observer(App);
