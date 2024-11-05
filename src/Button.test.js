import { fireEvent, render,screen } from "@testing-library/react";

import Test from "./Test";
test("click event",()=>{
    render (<Test/>)
    const btn=screen.getByRole("button");
    fireEvent.click(btn)
    expect(screen.getByText("update dataa")).toBeInTheDocument()
})

test("method testing 1",()=>{
    render (<Test/>)
    const btn=screen.getByTestId("btn1")
    fireEvent.click(btn)
    expect (screen.getByText("update dataa")).toBeInTheDocument()
})
