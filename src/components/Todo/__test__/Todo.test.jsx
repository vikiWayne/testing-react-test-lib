import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Todo from "../Todo";

const MockedTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodos = (todos) => {
  const inputElement = screen.getByPlaceholderText("Add a new task here...");
  const addButton = screen.getByRole("button", { name: "Add" });

  todos.forEach((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(addButton);
  });
};

describe("Todo", () => {
  it("Should render entered input value to the todo list", () => {
    render(<MockedTodo />);
    const inputText = "Buy some milk";
    const inputText2 = "Buy some egg";

    addTodos([inputText, inputText2, ""]);

    const todoItems = screen.getAllByTestId("todo-list-item");
    const todoCount = todoItems.length;

    expect(todoItems[0].textContent).toBe(inputText);
    expect(todoItems.length).toBe(2);
    expect(todoItems[todoCount - 1].textContent).toBe(inputText2);
  });

  it("should toggle active and inactive classes on clic", () => {
    render(<MockedTodo />);
    addTodos(["Buy bread"]);
    const todoItem = screen.getByText("Buy bread");
    expect(todoItem).toHaveClass("todo-item-active");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("todo-item-inactive");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("todo-item-active");
  });
});
