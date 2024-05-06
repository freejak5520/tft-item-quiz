import { render } from "@testing-library/react";
import Item from ".";

describe("Item", () => {
  it("renders the item empty", () => {
    const { container } = render(<Item />);

    expect(container).toMatchSnapshot();
  });

  it("renders the item", () => {
    const { container } = render(<Item item={{ id: 1, name: "test" }} />);

    expect(container).toMatchSnapshot();
  });

  it("renders the item test image", () => {
    const { container } = render(
      <Item item={{ id: 1, name: "test", image: "test-image" }} />
    );

    expect(container).toMatchSnapshot();
  });
});
