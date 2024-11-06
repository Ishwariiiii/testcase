import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App"

test("test app component", () => {
  render(<App />)
  //test text
  const text = screen.getByText(/Hello This Is Test Case/i)
  //test image
  const title = screen.getByTitle(/nature image/i)
  expect(text).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})

test("testing input box", () => {
  render(<App />)
  const inputCheck = screen.getByPlaceholderText("Enter Username")
  fireEvent.change(inputCheck, { target: { value: 'abc' } });
  expect(inputCheck.value).toBe("abc");
  expect(inputCheck).toHaveAttribute("id", "userId")
})

describe("ui test input fields", () => {
  test("test 1", () => {
    render(<App />)
    const input = screen.getAllByRole("textbox")
    for (let i = 0; i < input.length; i++) {
      expect(input[i]).toBeInTheDocument();
    }

  })
})


test("onchange event testing", () => {
  render(<App />)
  const input = screen.getByPlaceholderText("userUser")
  fireEvent.change(input, { target: { value: "" } })
  expect(input.value).toBe("");
})




test("getByRole button test", () => {
  render(<App />)
  const btn1 = screen.getByRole("button", { name: "save" })
  const btn2 = screen.getByRole("button", { name: "click" })

  const dv1 = screen.getByRole("dummy")
  expect(btn1).toBeInTheDocument()
  expect(btn2).toBeInTheDocument()
  expect(dv1).toBeInTheDocument()
})

test("input test case", () => {
  render(<App />)
  const input = screen.getAllByPlaceholderText("name")
  // expect (input[1]).toBeInTheDocument()
  for (let i = 0; i < input.length; i++) {
    expect(input[i]).toBeInTheDocument()
  }
})

test("checkbox test case", () => {
  render(<App />)
  const checkbox = screen.getAllByLabelText("Skills")
  for (let i = 0; i < checkbox.length; i++) {
    expect(checkbox[i]).toBeInTheDocument();
    expect(checkbox[i]).toBeChecked();
  }
})

