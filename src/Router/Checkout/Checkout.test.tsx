import { expect, it, describe, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkout } from "./index";
// import { useUser } from "../../hooks";
const addItemsMock = vi.fn();
const removeItemsMock = vi.fn();
const clearItemsMock = vi.fn();
const mockCartItem = {
  id: 4,
  imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
  name: "Grey Brim",
  price: 25,
  quantity: 1,
};
vi.mock("../../hooks", () => {
  return {
    useCart: vi.fn().mockImplementation(() => {
      return {
        addItems: addItemsMock,
        removeItems: removeItemsMock,
        clearItems: clearItemsMock,
        cartTotal: 1,
        cartItems: [mockCartItem],
      };
    }),
  };
});

describe("checkout suit", () => {
  let suit: HTMLElement;
  beforeEach(() => {
    suit = render(<Checkout />).container;
  });
  it("checkout get render", () => {
    expect(suit).toBeInTheDocument();
  });
  it("checkout have 3 button", () => {
    const button = screen.queryAllByRole("button");
    expect(button).toHaveLength(3);
  });
  it("checkout have left button trigger remove items", () => {
    const button = screen.queryAllByRole("button");
    const LeftButton = button[0];
    fireEvent.click(LeftButton);
    expect(removeItemsMock).toHaveBeenCalled();
    expect(removeItemsMock).toHaveBeenCalledWith(mockCartItem);
  });
  it("checkout have right button trigger add items", () => {
    const button = screen.queryAllByRole("button");
    const rightButton = button[1];
    fireEvent.click(rightButton);
    expect(addItemsMock).toHaveBeenCalled();
    expect(addItemsMock).toHaveBeenCalledWith(mockCartItem);
  });
  it("checkout have cross button trigger clear items", () => {
    const button = screen.queryAllByRole("button");
    const crossButton = button[2];
    fireEvent.click(crossButton);

    expect(clearItemsMock).toHaveBeenCalled();
    expect(clearItemsMock).toHaveBeenCalledWith(mockCartItem);
  });
});
