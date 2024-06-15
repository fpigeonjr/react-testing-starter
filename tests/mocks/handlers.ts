import { http, HttpResponse } from "msw"
import { products, categories } from "./data"

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json(categories)
  }),
  http.get("/products", () => {
    return HttpResponse.json(products)
  }),
  http.get("/products/:id", ({ params }) => {
    const { id } = params
    if (!id) {
      return new HttpResponse(null, { status: 400 })
    }

    const product = products.find((product) => product.id === Number(id))
    if (!product) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json(product ? product : null)
  })
]
