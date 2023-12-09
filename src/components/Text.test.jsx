// eslint-disable-next-line no-unused-vars
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Text from "./Text";

describe("App", () => {
  it("Vite to be in document", () => {
    render(<Text />);
    expect(screen.getByText("Vite")).toBeInTheDocument();
  });
});
