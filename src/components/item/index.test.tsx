import { render } from "@testing-library/react";
import Item from ".";

describe("Item", () => {
  it("renders the item", () => {
    const { container } = render(<Item />);

    expect(container).toMatchSnapshot();
  });
});
