import { describe, it, expect } from "vitest";
import {render, screen} from "@testing-library/react"
import App from "./App";

describe("App", () => {
  it("should render the App component", () => {
    render(<App />)

    expect(screen.getByTestId('app-container')).toHaveTextContent('Hello')
  });
});
