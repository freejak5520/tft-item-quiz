import { render } from "@testing-library/react";
import Operator from "./operator";

describe("Operator", () => {
  it("renders the operator", () => {
    const { container } = render(<Operator />);

    expect(container).toMatchSnapshot();
  });
});
