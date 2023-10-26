import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UserGuessNumber from "./UserGuessNumber";

// Mock the custom hook useGuessNumberUser
jest.mock("../framework/hooks/useGuessNumberUser", () => {
  return () => ({
    disabled: false,
    isLowOrHigh: "",
    message: "",
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    restartAgain: jest.fn(),
    userCount: 0,
    userGuessValue: [],
    randomNumber: 5000, // Mock the random number to a known value
  });
});

describe("UserGuessNumber", () => {
  it("renders with expected elements", () => {
    render(<UserGuessNumber />);

    // Check for specific elements
    expect(screen.getByText(/Guess the Number - Human/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your guess")).toBeInTheDocument();
    expect(screen.getByText("Guess")).toBeInTheDocument();
    expect(screen.getByText("Total Guess : 0")).toBeInTheDocument();
    expect(screen.getByText("Random Number : 5000")).toBeInTheDocument();
  });

  it("handles input change", () => {
    render(<UserGuessNumber />);

    const inputField = screen.getByPlaceholderText("Enter your guess");
    expect(inputField).toBeInTheDocument();
    fireEvent.input(inputField, { target: { value: "123" } });

    expect(inputField.value).toBe("123");
  });

  it("handles button click", () => {
    render(<UserGuessNumber />);

    const handleSubmit = jest.fn();
    const guessButton = screen.getByText("Guess");
    guessButton.onclick = handleSubmit;
    fireEvent.click(guessButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
