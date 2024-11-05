import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App"

test("test app component", () => {
  render(<App/>)
  const text = screen.getByText(/Hello This Is Test Case/i)
  const title = screen.getByTitle(/nature image/i)
  expect(text).toBeInTheDocument()
  expect(title).toBeInTheDocument()
})

test("on change event testing", () => {
  render(<App/>)
  const inputCheck = screen.getByPlaceholderText("Enter Username")
  fireEvent.change(inputCheck, {target: {value:'abc'}});
  expect(inputCheck.value).toBe("abc");
  })

describe("ui test", () => {
  test("test 1", () => {
    render(<App/>)
    const input = screen.getAllByRole("textbox")
    for(let i=0;i<input.length;i++){
      expect(input[i]).toBeInTheDocument();
    }
    
  })
})

test("getByLabelText",()=>{
  render(<App/>)
  const input=screen.getByLabelText("Username")
  expect (input).toBeInTheDocument()
})


