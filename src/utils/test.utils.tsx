/* eslint-disable react-refresh/only-export-components */
// import { Provider } from "react-redux";
// import { createStore } from "redux";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders = ({ children }: React.PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });
export * from "@testing-library/react";
export { customRender };
