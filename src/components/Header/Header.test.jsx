import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("should render Header with passed prop value, getByText", () => {
    render(<Header title="My Header" />);
    const headingElem = screen.getByText("My Header");
    expect(headingElem).toBeInTheDocument();
  });

  // it("should render Header with passed prop value, getByRole", () => {
  //   render(<Header title="My Header" />);
  //   const headingElem = screen.getByRole("heading");
  //   expect(headingElem).toBeInTheDocument();
  // });

  // it("should render Header with passed prop value, getByRole:extended with attr", () => {
  //   render(<Header title="My Header" />);
  //   const headingElem = screen.getByRole("heading", { name: "Static" });
  //   expect(headingElem).toBeInTheDocument();
  // });

  // it("should render Header with passed prop value, getByTitle", () => {
  //   render(<Header title="My Header" />);
  //   const headingElem = screen.getByTitle("mainHeader");
  //   expect(headingElem).toBeInTheDocument();
  // });

  // it("should render Header with passed prop value, getByTestId", () => {
  //   render(<Header title="My Header" />);
  //   const headingElem = screen.getByTestId("header-1");
  //   expect(headingElem).toBeInTheDocument();
  // });

  // // find by
  // it("should render Header with passed prop value, findByText", async () => {
  //   render(<Header title="My Header" />);
  //   const headingElem = await screen.findByText("My Header");
  //   expect(headingElem).toBeInTheDocument();
  // });

  // // query by

  // it("should render Header with passed prop value, getByText", () => {
  //   render(<Header title="My Header" />);
  //   const headingElem = screen.queryByText("Bog");
  //   expect(headingElem).not.toBeInTheDocument();
  // });

  // it("should render Header with passed prop value, getAllByRole", () => {
  //   render(<Header title="My Header" />);
  //   const headingElements = screen.getAllByRole("heading");
  //   expect(headingElements.length).toBe(2);
  // });
});
