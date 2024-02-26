import { describe, it, expect } from "vitest";
import {render, screen} from "@testing-library/react"
import App from "./App";
import Timer from "../Timer/Timer"

describe("App", () => {
  it("should render a single container", () => {
    render(<App />)

    expect(screen.getAllByTestId('app-container').length).toBe(1)
  });
  
});
