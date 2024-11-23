import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";

describe("Render pagination component", () => {
  beforeEach(() => {
    vi.mock("../../utils", () => {
      return {
        range: () => [1, 2, 3, 4, 5],
      };
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render pagination component", () => {
    render(
      <Pagination total={10} limit={2} currentPage={2} selectPage={() => {}} />
    );

    expect(screen.getAllByTestId("page-container").length).toBe(5);
    expect(screen.getAllByTestId("page-container")[0]).toHaveTextContent("1");
  });

  it("should click", () => {
    const handleClick = vi.fn();
    render(
      <Pagination
        total={10}
        limit={5}
        currentPage={2}
        selectPage={handleClick}
      />
    );

    fireEvent.click(screen.getAllByTestId("page-container")[0]);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
