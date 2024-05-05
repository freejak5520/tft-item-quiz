import { render } from "@testing-library/react";
import Footer from "./footer";

describe("Footer", () => {
  it("renders the footer", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
