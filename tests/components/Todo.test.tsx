import { render, screen } from "@testing-library/react";
import Todo from "../../src/components/Todo";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Todo Component", () => {
  test("check to exists input and add button  ", async () => {
    render(<Todo />);
    const input = screen.getByRole("textbox", { name: "task" });
    expect(input).toBeInTheDocument();
    const addButton = screen.getByText("Add");
    expect(addButton).toBeInTheDocument();
  });

  test("can add new todo ?", async () => {
    render(<Todo />);
    const input = screen.getByRole("textbox", { name: "task" });
    const addButton = screen.getByText("Add");

    await userEvent.type(input, "new todo");
    await userEvent.click(addButton);
    expect(screen.getByText("new todo"));
  });

  test("check to complete ?", async () => {
    render(<Todo />);
    const input = screen.getByRole("textbox", { name: "task" });
    const addButton = screen.getByText("Add");

    await userEvent.type(input, "new todo");
    await userEvent.click(addButton);
  });
});
