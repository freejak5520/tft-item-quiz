import { render } from "@testing-library/react";
import Separator from "./separator";

describe("Separator", () => {
  it("renders the separator", () => {
    const { container } = render(<Separator />);

    expect(container).toMatchSnapshot();
  });
});
