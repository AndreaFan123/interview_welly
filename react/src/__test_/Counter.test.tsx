import { render, screen, waitFor } from "@testing-library/react";
import Counter from "../components/counter/Counter";
import "@testing-library/jest-dom";

describe("Counter", () => {
  it("counter increments when the increment button is clicked", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const count = screen.getByTestId("countResult");
    incrementButton.click();
    await waitFor(() => {
      expect(count.textContent).toBe("1");
    });
  });
});
