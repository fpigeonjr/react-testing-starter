import { render, screen, waitFor } from "@testing-library/react"
import ToastDemo from "../../src/components/ToastDemo"
import userEvent from "@testing-library/user-event"
import { Toaster } from "react-hot-toast"

describe("ToastDemo", () => {
  

  it("should render Toast", () => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    )

    const button = screen.getByRole("button", { name: /show toast/i })
    expect(button).toBeInTheDocument()
  })
  it("should show toast when button is clicked", async () => {
    const user = userEvent.setup()
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    )
    const button = screen.getByRole("button", { name: /show toast/i })
    await user.click(button)

    const toast = await screen.findByText(/success/i)
    expect(toast).toBeInTheDocument()
  })
})
