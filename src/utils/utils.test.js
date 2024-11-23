import { describe, expect, it } from "vitest";
import { range } from ".";

describe("utils", () => {
  describe("range", () => {
    it("returns correct result for 1-6 range", () => {
      const result = range(1, 6);
      const expected = [1, 2, 3, 4, 5];
      expect(result).toEqual(expected);
    });

    it("returns correct result for 51-55 range", () => {
      const result = range(51, 56);
      const expected = [51, 52, 53, 54, 55];
      expect(result).toEqual(expected);
    });
  });
});
