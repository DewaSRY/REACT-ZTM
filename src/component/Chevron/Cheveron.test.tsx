import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import { Chevron, CHEVRON_TYPE_CLASSES } from "./index";
describe("Chaperon test suit", () => {
  let suit: HTMLElement;
  it("Chevron render X", () => {
    suit = render(<Chevron chevron={CHEVRON_TYPE_CLASSES.CROSS} />).container;
    const actual = suit.querySelector(".cross");
    expect(actual).toBeInTheDocument();
  });
  it("Chevron render left arrow", () => {
    suit = render(<Chevron chevron={CHEVRON_TYPE_CLASSES.LEFT} />).container;
    const actual = suit.querySelector(".left-arrow");
    expect(actual).toBeInTheDocument();
  });
  it("Chevron render right arrow", () => {
    suit = render(<Chevron chevron={CHEVRON_TYPE_CLASSES.RIGHT} />).container;
    const actual = suit.querySelector(".right-arrow");
    expect(actual).toBeInTheDocument();
  });
});
