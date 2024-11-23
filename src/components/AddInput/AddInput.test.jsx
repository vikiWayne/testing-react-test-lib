import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AddInput from "./AddInput";

describe("AddInput", () => {
  it("Should render input element", () => {
    render(<AddInput todos={[]} setTodos={vi.fn} />);

    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    expect(inputElement).toBeInTheDocument();
  });

  it("Should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={vi.fn} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "Go buy something" } });
    expect(inputElement.value).toBe("Go buy something");
  });

  it("Should be empty input after add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "Go buy something" } });
    fireEvent.click(addButton);
    expect(inputElement.value).toBe("");
  });

  it("Should show error message if input is empty", () => {
    render(<AddInput todos={[]} setTodos={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Add a new task here...");
    const addButton = screen.getByRole("button", { name: "Add" });
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(addButton);
    const errorMessage = screen.getByTestId("error-msg");
    expect(errorMessage).toBeVisible();
    expect(errorMessage.textContent).toBe("There is an error occurred");
  });
});
