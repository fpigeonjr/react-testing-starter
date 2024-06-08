import { render, screen } from "@testing-library/react"
import OrderStatusSelector from "../../src/components/OrderStatusSelector"
import { Theme } from "@radix-ui/themes"
import userEvent from "@testing-library/user-event"

describe("OrderStatusSelector", () => {
  it("should render New as the default status", () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    )

    const btn = screen.getByRole("combobox")
    expect(btn).toHaveTextContent(/new/i)
  })
  it("should render correct statuses", async () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    )

    const btn = screen.getByRole("combobox")
    const user = userEvent.setup()
    await user.click(btn)

    const options = await screen.findAllByRole("option")
    expect(options).toHaveLength(3)
    const labels = options.map((option) => option.textContent)
    expect(labels).toEqual(["New", "Processed", "Fulfilled"])
  })
})
