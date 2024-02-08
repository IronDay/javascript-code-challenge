import {describe, expect, it} from "vitest";
import createCounter from "../src/day1/Counter";

describe("Test the counter function", () => {
    const counter = createCounter(10);
    it('should return 10 for the first call', () => {
        expect(counter()).toBe(10)
    });

    it('should return 11 for the second call', () => {
        expect(counter()).toBe(11)
    });

    it('should return 12 for the third call', () => {
        expect(counter()).toBe(12)
    });
})