import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App"
test("test app component", () => {
  render(<App />)
  const text = screen.getByText(/Hello This Is Test Case/i)
  const title = screen.getByTitle(/nature image/i)
  expect(text).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})
test("test input field", () => {
  render(<App />)
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username")
  fireEvent.change(input, { target: { value: "a" } })
  expect(input.value).toBe("atest")
})

describe("ui test", () => {
  test("test 1", () => {
    render(<App />)
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  })
})




