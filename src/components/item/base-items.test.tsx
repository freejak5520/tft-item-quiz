import { render } from "@testing-library/react";
import BaseItems from "./base-items";
import items from "@/data/items/11.json";
import items10 from "@/data/items/10.json";

describe("BaseItems", () => {
  it("renders the base items Season 10", () => {
    const baseItems = items10.data.filter((item) => !item.baseItems);

    const { container } = render(<BaseItems items={baseItems} />);

    expect(container).toMatchSnapshot();
  });

  it("renders the base items", () => {
    const baseItems = items.data.filter((item) => !item.baseItems);

    const { container } = render(<BaseItems items={baseItems} />);

    expect(container).toMatchSnapshot();
  });
});
