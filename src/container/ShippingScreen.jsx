import OrderTracking from "../components/Shipping/OrderTracking"
import PaymentFailed from "../components/Shipping/PaymentFailed"
import PaymentMethod from "../components/Shipping/PaymentMethod"
import ShippingInfo from "../components/Shipping/ShippingInfo"
import SuccessfulPurchase from "../components/Shipping/SuccessfulPurchase"

const ShippingScreen = () => {
  return (
    <div>
        <ShippingInfo />
        <PaymentMethod />
        <SuccessfulPurchase />
        <OrderTracking />
        <PaymentFailed />
    </div>
  )
}

export default ShippingScreen