import React from "react";
import { render, screen } from "@testing-library/react";
import TestToggle from "../../src/components/TestToggle.tsx";
import userEvent from "@testing-library/user-event";
describe("TestToggle Component", () => {
  test("model box should be display when button click", async () => {
    render(<TestToggle />);
    const button = screen.getByRole("button", { name: /Toggle/i });
    expect(button).toBeInTheDocument();

    expect(screen.queryByText(/Model Box/i)).toBeNull();

    await userEvent.click(button);
    expect(screen.getByText("Model Box")).toBeInTheDocument();

    await userEvent.click(button);
    expect(screen.queryByText(/Model Box/i)).toBeNull();
  });
});
