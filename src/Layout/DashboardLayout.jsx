import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import ScrollToTop from '../components/ScrollToTop';

const DashboardLayout = () => {
    const location = useLocation();
 
    return (
        <div>
            <ScrollToTop/>
            <Header />

            <div className='flex min-h-[550px]'>
                <div className="w-[250px] min-w-[220px] min-h-[550px] border-r-2">

                    <Sidebar />
                </div>
                <div className="flex-auto m-5">
                    <Outlet />
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default DashboardLayout