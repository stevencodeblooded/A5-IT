import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HomeScreen from "./container/HomeScreen"
import Layout from "./shared/Layout"
import ShopProductsScreen from "./container/ShopProductsScreen"
import CartScreen from "./container/CartScreen"
import ShippingScreen from "./container/ShippingScreen"
import MyAccountScreen from "./container/MyAccountScreen"
import AccountLayout from "./shared/AccountLayout"
import Order from "./components/MyAccount/Order"
import SavedItems from "./components/MyAccount/SavedItems"
import ProfileSettings from "./components/MyAccount/ProfileSettings"
import Address from "./components/MyAccount/Address"
import PaymentMethod from "./components/Shipping/PaymentMethod"
import SingleProductScreen from "./container/SingleProductScreen"
import BrandScreen from "./container/BrandScreen"
import OurTeamScreen from "./container/OurTeamScreen"
import ContactScreen from "./container/ContactScreen"
import FaqScreen from "./container/FaqScreen"
import Resources from './container/ResourcesScreen'
import LoginScreen from "./container/LoginScreen"
import SignupScreen from "./container/SignupScreen"
import Logout from "./components/MyAccount/Logout"
import NewAddress from "./container/NewAddress"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="login" element={<LoginScreen />} />
        <Route path="signup" element={<SignupScreen />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="shop" element={<ShopProductsScreen />} />
          <Route path="cart" element={<CartScreen />} />
          <Route path="shipping" element={<ShippingScreen />} />
          <Route path="account" element={<AccountLayout />} >
            <Route index element={<MyAccountScreen />} />
            <Route path="orders" element={<Order />} />
            <Route path="saved" element={<SavedItems />} />
            <Route path="profile" element={<ProfileSettings />} />
            <Route path="address" element={<Address />} />
            <Route path="new-address" element={<NewAddress />} />
            <Route path="payment" element={<PaymentMethod />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="product/:id" element={<SingleProductScreen />} />
          <Route path="brands" element={<BrandScreen />} />
          <Route path="team" element={<OurTeamScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="faq" element={<FaqScreen />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App