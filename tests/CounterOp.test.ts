import { describe, it, expect } from "vitest";
import { CounterOps } from "../src/day2/CounterOp";

describe("Test the CounterOps function", () => {
  const counter = CounterOps(5);

  it("should return 6 when the increment function is called", () => {
    expect(counter.increment()).toBe(6);
  });

  it("should return 5 when the decrement function is called", () => {
    expect(counter.decrement()).toBe(5);
  });

  it("should return the initial number when the reset function is called", () => {
    expect(counter.reset()).toBe(5);
  });
});
