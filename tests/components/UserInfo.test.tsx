import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfo from "../../src/components/UserInfo";

describe("UserInfo Component", () => {
  it("test UserInfo", () => {
    render(<UserInfo name="aung" />);
    const welcomeMessage = screen.getByText(/welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
  it("should be display Sign up button when have no name  ", () => {
    render(<UserInfo />);
    const singupButton = screen.getByText(/Sign up/i);
    expect(singupButton).toBeInTheDocument();
  });
});
