import { Toaster } from "react-hot-toast"
import ToastDemo from "../components/ToastDemo"
import OrderStatusSelector from "../components/OrderStatusSelector"

const PlaygroundPage = () => {
  return (
    <>
      <OrderStatusSelector onChange={() => {}} />
      <ToastDemo />
      <Toaster />
    </>
  )
}

export default PlaygroundPage
