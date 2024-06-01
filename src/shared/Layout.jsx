import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-x-hidden'>
        <Navbar />
        <Outlet />
        <div  className="sticky top-full w-full bg-indigo-950 px-3 py-10">
          <Footer />
        </div>
    </div>
  )
}

export default Layout