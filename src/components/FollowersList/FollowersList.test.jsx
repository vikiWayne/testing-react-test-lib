import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import FollowersList from "./FollowersList";

const sleep = async (time = 2000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  vi.mock("./api", () => ({
    fetchFollowers: vi.fn(() =>
      Promise.resolve([{ id: 0, name: "Follower 1" }])
    ),
  }));
  it(
    "should render first card",
    async () => {
      render(<MockFollowersList />);

      const followerElement = await screen.findByTestId("follower-item-0", {});
      expect(followerElement).toBeInTheDocument();
    },
    { timeout: 5000 }
  );

  // it("Should render multiple follower items", async () => {
  //   render(<MockFollowersList />);
  //   const followerElements = await screen.findAllByTestId(/follower-item/);
  //   expect(followerElements).toHaveLength(5);
  // });
});
