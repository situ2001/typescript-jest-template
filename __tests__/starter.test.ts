import { describe, expect, test } from "@jest/globals";
import { sum } from "../src/starter";

describe("starter module", () => {
  test("adds 114 + 400 to equal 514", () => {
    expect(sum(114, 400)).toBe(514);
  });
});
