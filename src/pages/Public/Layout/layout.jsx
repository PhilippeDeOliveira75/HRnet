import './layout.scss'
import { Outlet } from 'react-router'
import { Header, Footer } from '@components/import.js'


function PublicLayout  ()  {

    return (

        <div className='layout'>

            <Header />

            <div className="main-content">

                <Outlet />

            </div>

            <Footer />

        </div>

    )

}

export default PublicLayout