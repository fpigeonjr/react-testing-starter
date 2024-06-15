import { it, expect, describe } from "vitest"

describe("group", () => {
  it("should", async () => {
    const res = await fetch("/categories")
    const data = await res.json()
    console.log([data])
    expect(1).toBeTruthy()
    expect(data).toHaveLength(3)
  })
})
