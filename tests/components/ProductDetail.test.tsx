import { render, screen } from "@testing-library/react"
import ProductDetail from "../../src/components/ProductDetail"
import { HttpResponse, http } from "msw"
import { products } from "../mocks/data"
import { server } from "../mocks/server"

describe("ProductDetail", () => {
  it("should render the ProductList", async () => {
    render(<ProductDetail productId={1} />)

    const product = await screen.findByText(new RegExp(products[0].name))
    const price = await screen.findByText(new RegExp(products[0].price.toString()))

    expect(product).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })
  it("should render error message if product is not found", async () => {
    server.use(http.get("/products/1", () => HttpResponse.json(null)))
    render(<ProductDetail productId={1} />)

    const error = await screen.findByText(/not found/i)

    expect(error).toBeInTheDocument()
  })
  it("should render error for invalid product id", async () => {
    render(<ProductDetail productId={0} />)

    const error = await screen.findByText(/invalid/i)

    expect(error).toBeInTheDocument()
  })
})
