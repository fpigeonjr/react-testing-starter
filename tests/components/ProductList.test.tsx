import { render, screen } from "@testing-library/react"
import { HttpResponse, http } from "msw"
import ProductList from "../../src/components/ProductList"
import { server } from "../mocks/server"

describe("ProductList", () => {
  it("should render list of products", async () => {
    render(<ProductList />)
    const items = await screen.findAllByRole("listitem")

    expect(items.length).toBeGreaterThan(0)
  })
  it("should render no products available if no products are found", async () => {
    server.use(http.get("/products", () => HttpResponse.json([])))
    render(<ProductList />)

    const msg = await screen.findByText(/no products/i)

    expect(msg).toBeInTheDocument()
  })
})
