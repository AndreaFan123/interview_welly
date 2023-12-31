import { render, screen } from "@testing-library/react";
import ConditionalRendering from "../components/ConditionalRendering";
import "@testing-library/jest-dom";

describe("ConditionalRendering", () => {
  it("button text changes from Log In to Log Out when clicked", () => {
    let isLoggedIn = false;
    const handleLogin = () => {
      isLoggedIn = !isLoggedIn;
    };

    const { rerender } = render(
      <ConditionalRendering isLoggedIn={isLoggedIn} onLogIn={handleLogin} />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Log In");

    button.click();
    rerender(
      <ConditionalRendering isLoggedIn={isLoggedIn} onLogIn={handleLogin} />
    );
    expect(button).toHaveTextContent("Log Out");
  });
});
