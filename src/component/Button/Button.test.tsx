/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Button, BUTTON_TYPE_CLASSES } from "./index";

describe("button tests", () => {
  let suit: HTMLElement;
  describe("base button class ", () => {
    it("base button ", () => {
      suit = render(<Button>button</Button>).container;
      const actual = suit.querySelector(".button-container");
      expect(actual).toBeInTheDocument();
    });
    it("base button have undefined as second class ", () => {
      suit = render(<Button>button</Button>).container;
      const actual = suit.querySelector(".undefined");
      expect(actual).toBeInTheDocument();
    });
  });
  describe("google button class ", () => {
    it("button have google class  ", () => {
      suit = render(
        <Button buttonType={BUTTON_TYPE_CLASSES.GOOGLE}>button</Button>
      ).container;
      const actual = suit.querySelector(".google-sign-in");
      expect(actual).toBeInTheDocument();
    });
  });
  describe("inverted button class ", () => {
    it("button have inverted class ", () => {
      suit = render(
        <Button buttonType={BUTTON_TYPE_CLASSES.INVERTED}>button</Button>
      ).container;
      const actual = suit.querySelector(".inverted");
      expect(actual).toBeInTheDocument();
    });
  });
});
