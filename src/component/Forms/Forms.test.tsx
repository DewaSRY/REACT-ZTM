import { expect, it, describe, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Forms } from "./index";

describe("Forms suit", () => {
  let suit: HTMLElement;
  const mockInput = {
    email: "",
    password: "",
  };

  const mockSUbmit = vi.fn();
  const mockInputUpdate = vi.fn();
  beforeEach(() => {
    suit = render(
      <Forms
        inputs={mockInput}
        inputsUpdate={mockInputUpdate}
        onSubmitForm={mockSUbmit}
      >
        <button role="button">Submit</button>
      </Forms>
    ).container;
  });
  it("forms get render", () => {
    const actual = screen.getByRole("forms");
    expect(actual).toBeInTheDocument();
  });
  it("forms render all the input", () => {
    const actual = suit.querySelectorAll("input");
    expect(actual).toHaveLength(2);
  });
  it("Form trigger the onSubmitForm function", async () => {
    const formElement = suit.querySelector("form");
    fireEvent.submit(formElement);

    expect(mockSUbmit).toBeCalled();
  });
  it("input we send after 500 millisecond", async () => {
    const inputs = suit.querySelectorAll("input");
    fireEvent.change(inputs[0], { target: { value: "someEmail" } });
    fireEvent.change(inputs[1], { target: { value: "somePassword" } });
    expect(inputs).toHaveLength(2);
    setTimeout(() => {
      expect(mockInputUpdate).toHaveBeenCalled();
      expect(mockInputUpdate).toHaveBeenCalledWith({
        email: "someEmail",
        password: "somePassword",
      });
    }, 500);
  });
});
