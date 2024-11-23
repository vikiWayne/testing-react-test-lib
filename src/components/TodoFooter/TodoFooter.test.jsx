import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import TodoFooter from "./TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  it("Should render TodoFooter", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paraElement = screen.getByText("5 tasks left");
    expect(paraElement).toBeInTheDocument();
  });

  it('Should render "task" when incomplete tasks is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText("1 task left");
    expect(paraElement).toBeInTheDocument();
  });

  it('Should render content in a "p" tag', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText("1 task left");
    expect(paraElement).toContainHTML("p");
  });

  it('Should render content in a "p" tag', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElement = screen.getByText("1 task left");
    expect(paraElement).toHaveTextContent("1 task left");
  });
});
