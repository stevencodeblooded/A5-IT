import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div>
      <section>
        <nav>
          <ul className="flex flex-wrap mb-8 md:flex-col gap-5 md:gap-2">
            <li>
              <NavLink
                to={"orders"}
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"saved"}
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Saved Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"profile"}
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Profile Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"address"}
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Addresses
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"payment"}
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
              >
                Payment Methods
              </NavLink>
            </li>
            <li>
              <NavLink
                to="logout"
                className={({ isActive }) => (isActive ? "font-semibold text-red-600" : "text-red-600")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default AccountSidebar