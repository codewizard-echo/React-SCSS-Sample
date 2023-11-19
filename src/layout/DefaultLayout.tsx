import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const DefaultLayout = () => {
    return (
        <>
            <div>
                <Sidebar />
                <div>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                </div>                
            </div>
        </>
    )
}

export default DefaultLayout;