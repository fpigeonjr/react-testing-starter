import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("/categories", () => {
    return HttpResponse.json([
      { id: 1, name: "Electronics" },
      { id: 2, name: "Beauty" },
      { id: 3, name: "Garden" }
    ])
  }),
  http.get("/products", ()=>{
    return HttpResponse.json([
      { id: 1, name: "iPhone 12" },
      { id: 2, name: "MacBook Pro" },
      { id: 3, name: "iPad Pro" }
    ])
  })
]
