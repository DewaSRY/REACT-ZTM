import { expect, it, describe, beforeEach, vi } from "vitest";
import { render, prettyDOM, screen, fireEvent } from "@testing-library/react";
import { Authentication } from "./index";
// import { useUser } from "../../hooks";
const googleLoginMock = vi.fn();
const emailLoginMock = vi.fn();
const createUserMock = vi.fn();
vi.mock("../../hooks", () => {
  return {
    useUser: vi.fn().mockImplementation(() => {
      return {
        googleLogin: googleLoginMock,
        emailLogin: emailLoginMock,
        createUser: createUserMock,
      };
    }),
  };
});
// const {emailLogin,}=useUser()
describe("Authentication suit", () => {
  let suit: HTMLElement;
  beforeEach(() => {
    suit = render(<Authentication />).container;
  });
  it("Authentication get render ", () => {
    expect(suit).toBeInTheDocument();
  });
  it("Authentication have two forms ", () => {
    const forms = screen.queryAllByRole("forms");
    expect(forms).toHaveLength(2);
  });
  it("Authentication have 3 button ", () => {
    const buttonElements = screen.queryAllByRole("button");
    expect(buttonElements).toHaveLength(3);
  });
  it("Authentication have SIGN IN button ", () => {
    const signInButton = screen.queryAllByRole("button")[0];
    expect(signInButton.innerHTML).toMatch("SIGN IN");
    // expect(emailLoginMock).toBeCalled();
  });
  it("Authentication have SIGN IN button ", () => {
    const signInButton = screen.queryAllByRole("button")[1];
    expect(signInButton.innerHTML).toMatch("Sign in with google");
  });
  it("Authentication send signIn form ", () => {
    const forms = screen.queryAllByRole("forms")[0];
    fireEvent.submit(forms);
    expect(emailLoginMock).toBeCalled();
  });
  it("Authentication send Sign in with google pop up ", () => {
    const signInButton = screen.queryAllByRole("button")[1];

    fireEvent.click(signInButton);
    expect(googleLoginMock).toBeCalled();
    expect(googleLoginMock).toBeCalledWith();
  });
  it("Authentication signUp form have 4 inputs", () => {
    const forms = screen.queryAllByRole("forms")[1];
    const formsInput = forms.querySelectorAll("input");
    const DOM = prettyDOM(forms);
    console.log(DOM);
    // console.log(forms.innerHTML);
    expect(formsInput).toHaveLength(4);
  });
  it("Authentication signUp form get send", () => {
    const forms = screen.queryAllByRole("forms")[1];
    const DOM = prettyDOM(forms);
    console.log(DOM);
    // console.log(forms.innerHTML);
    fireEvent.submit(forms);
    expect(createUserMock).toBeCalled();
  });
});
