import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders the footer", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });

  it("renders the footer user name", () => {
    render(<Footer />);

    expect(screen.getByRole("strong")).toHaveTextContent("Jake Lee");
  });

  it("renders the footer github link", () => {
    render(<Footer />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://github.com/freejak5520/tft-item-quiz"
    );
    expect(screen.getByRole("link")).toHaveTextContent("Github");
  });
});
