import { expect, it, describe, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Inputs } from "./index";

const changeHandler = vi.fn();

describe("Input suit", () => {
  let suit: HTMLElement;

  beforeEach(() => {
    suit = render(
      <Inputs label="test" value="" onChange={changeHandler} />
    ).container;
  });

  it("Render inputs element", () => {
    const actual = screen.getByText("test");
    expect(actual).toBeInTheDocument();
  });
  it("get label class if the input have value", () => {
    suit = render(<Inputs label="test" value="hallo" />).container;
    const actual = suit.querySelector(".form-input-label");
    expect(actual).toBeInTheDocument();
  });
  it("onchange is active", () => {
    const input = suit.querySelector("input");
    fireEvent.change(input, { target: { value: "hallo" } });
    expect(changeHandler).toHaveBeenCalled();
  });
});
