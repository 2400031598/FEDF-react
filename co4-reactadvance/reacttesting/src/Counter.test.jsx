//render → mounts a component in the test.
//screen → queries elements (like getByText).
//fireEvent → simulates user actions (like clicks)
import React from "react";   // 👈 add this


import { render, screen, fireEvent } from "@testing-library/react";
//Imports custom matchers (like .toBeInTheDocument).
import "@testing-library/jest-dom";
import Counter from "./Counter";
//checks if Counter: 0 appears when the component is first rendered.
test("renders initial count", () => {
  render(<Counter />);
  expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
});
//clicks "Increment" and expects count to be 1
test("increments counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
});
//
test("decrements counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
});