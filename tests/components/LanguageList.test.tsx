import { render, screen } from "@testing-library/react";
import React from "react";
import LanguageList from "../../src/components/LanguageList";

describe("LanguageLists", () => {
  it("return language lists have a languages props ", () => {
    const languages = ["js", "html", "css", "java", "ts"];
    render(<LanguageList languages={languages} />);
    languages.forEach((language) => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });
  it("when not languases props return empty list", () => {
    render(<LanguageList languages={[]} />);
    expect(
      screen.getByText(/Programming language is empty/i)
    ).toBeInTheDocument();
  });
});
