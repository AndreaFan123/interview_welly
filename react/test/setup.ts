import { cleanup } from "@testing-library/react";
// import matchers from "@testing-library/jest-dom/matchers";
// import { expect } from "vitest";
import { afterEach } from "vitest";

// expect.extend(matchers);

afterEach(() => {
  cleanup();
});
