import { Toaster } from "react-hot-toast"
import OrderStatusSelector from "../components/OrderStatusSelector"
import ToastDemo from "../components/ToastDemo"

const PlaygroundPage = () => {
  return (
    <>
      <OrderStatusSelector onChange={console.log} />
      <ToastDemo />
      <Toaster />
    </>
  )
}

export default PlaygroundPage
