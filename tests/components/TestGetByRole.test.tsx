import React from "react";
import { render, screen } from "@testing-library/react";
import TestGetByRole from "../../src/components/TestGetByRole";

describe("TestGetByRole", () => {
  test("get button by getByRole", () => {
    render(<TestGetByRole />);
    const btn = screen.getByRole("button", { name: "btn-click" });
    expect(btn).toBeInTheDocument();
  });
  test("select header h1 by getByRole", () => {
    render(<TestGetByRole />);
    expect(
      screen.getByRole("heading", { name: "header level-1", level: 1 })
    ).toBeInTheDocument();
  });

  test("select by aria-label to textBox", () => {
    render(<TestGetByRole />);
    expect(screen.getByRole("textbox", { name: "username" }));
  });
  test("get a link element by getByRole", () => {
    render(<TestGetByRole />);
    expect(screen.getByRole("link", { name: "home" })).toBeInTheDocument();
  });
  test("get a footer element by getByRole", () => {
    render(<TestGetByRole />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("get a navbar element by getByRole", () => {
    render(<TestGetByRole />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  test("get a header element by getByRole", () => {
    render(<TestGetByRole />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("get a image element by getByRole", () => {
    render(<TestGetByRole />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
