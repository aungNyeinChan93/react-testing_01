import { render, screen } from "@testing-library/react";
import GetAllByQueries from "../../src/components/GetAllByQuerise";
import React from "react";

describe("GetAllByQueries", () => {
  test("multiselect by getAllBy", () => {
    render(<GetAllByQueries />);

    const inputs = screen.getAllByLabelText(/name/i);
    expect(inputs.length).toBeGreaterThan(1);

    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });
  });
});
