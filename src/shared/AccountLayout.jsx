import { Outlet } from "react-router-dom"
import AccountSidebar from "../components/MyAccount/AccountSidebar"

const AccountLayout = () => {
  return (
    <div>
        <AccountSidebar />
        <Outlet />
    </div>
  )
}

export default AccountLayout