import { fireEvent, render,screen } from "@testing-library/react";

import Test from "./Test";
test("click event",()=>{
    render (<Test/>)
    const btn=screen.getByRole("button");
    fireEvent.click(btn)
    expect(screen.getByText("update dataa")).toBeInTheDocument()
})
