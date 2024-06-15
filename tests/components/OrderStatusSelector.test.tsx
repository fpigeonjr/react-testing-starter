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
      getOptions: async () => await screen.findAllByRole("option"),
      getOption: async (label: RegExp) => await screen.findByRole("option", { name: label })
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
  it.each([
    { label: /processed/i, value: "processed" },
    { label: /fulfilled/i, value: "fulfilled" }
  ])("should call onChange when status is changed to $value", async ({ label, value }) => {
    const { button, user, onChange, getOption } = renderComponent()

    await user.click(button)
    const option = await getOption(label)
    await user.click(option)

    expect(onChange).toHaveBeenCalledWith(value)
  })
  it("should call onChange when status is changes to 'new'", async () => {
    const { button, user, onChange, getOption } = renderComponent()

    await user.click(button)
    const processedOption = await getOption(/processed/i)
    await user.click(processedOption)

    await user.click(button)
    const newOption = await getOption(/new/i)
    await user.click(newOption)

    expect(onChange).toHaveBeenCalledWith("new")
  })
})
