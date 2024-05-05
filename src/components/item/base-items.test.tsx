import { fireEvent, render, screen } from "@testing-library/react";
import BaseItems from "./base-items";
import items10 from "@/data/items/10.json";
import items11 from "@/data/items/11.json";

describe("BaseItems", () => {
  it("renders the empty base items", () => {
    const { container } = render(<BaseItems items={[]} />);

    expect(container).toMatchSnapshot();
  });

  it("renders the base items Season 10", () => {
    const baseItems = items10.data.filter((item) => !item.baseItems);

    const { container } = render(<BaseItems items={baseItems} />);

    expect(container).toMatchSnapshot();
  });

  it("renders the base items Season 11", () => {
    const baseItems = items11.data.filter((item) => !item.baseItems);

    const { container } = render(<BaseItems items={baseItems} />);

    expect(container).toMatchSnapshot();
  });

  it("item click", () => {
    render(<BaseItems items={[]} />);

    fireEvent.click(screen.getByTestId("item-1"));
  });
});
