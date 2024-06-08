import { render, screen } from "@testing-library/react"
import OrderStatusSelector from "../../src/components/OrderStatusSelector"
import { Theme } from "@radix-ui/themes"
import userEvent from "@testing-library/user-event"

describe("OrderStatusSelector", () => {
  const renderComponent = () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    )
    return {
      user,
      onChange,
      button: screen.getByRole("combobox"),
      getOptions: async () => await screen.findAllByRole("option")
    }
  }
  it("should render New as the default status", () => {
    const { button } = renderComponent()

    expect(button).toHaveTextContent(/new/i)
  })
  it("should render correct statuses", async () => {
    const { button, user, getOptions } = renderComponent()

    await user.click(button)
    const options = await getOptions()

    expect(options).toHaveLength(3)
    const labels = options.map((option) => option.textContent)
    expect(labels).toEqual(["New", "Processed", "Fulfilled"])
  })
})
