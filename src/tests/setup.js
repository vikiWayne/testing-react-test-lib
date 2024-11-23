import "@testing-library/jest-dom/vitest";
import { cleanup, configure } from "@testing-library/react";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

configure({ asyncUtilTimeout: 100000 });
