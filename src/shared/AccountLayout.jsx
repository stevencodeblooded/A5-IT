import { Outlet } from "react-router-dom"
import AccountSidebar from "../components/MyAccount/AccountSidebar"

const AccountLayout = () => {
  return (
    <div className="px-3 py-48">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/4">
            <AccountSidebar />
          </div>
          <div className="w-full md:w-3/4">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccountLayout