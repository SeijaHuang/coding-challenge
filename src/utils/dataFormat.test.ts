import { describe, expect, test } from "vitest";
import { formatCurrency, formatPercentage } from "./dataFormat";
import { EACCOUNT_CURRENCY } from "../constants/account";

describe("formatCurrency", () => {
  test("should format number with currency with whole number", () => {
    expect(formatCurrency(1000, EACCOUNT_CURRENCY.AUD)).toBe("$1,000");
    expect(formatCurrency(100000000, EACCOUNT_CURRENCY.AUD)).toBe(
      "$100,000,000"
    );
  });

  test("should format number with currency with decimal removed", () => {
    expect(formatCurrency(1000.45, EACCOUNT_CURRENCY.AUD)).toBe("$1,000");
  });
});

describe("formatPercentage", () => {
  test("should format whole number to percentage with one decimal", () => {
    expect(formatPercentage(100)).toBe("100.0%");
  });
  test("should format number with one decimal to percentage with its decimal", () => {
    expect(formatPercentage(100.1)).toBe("100.1%");
  });
  test("should format number with one than one decimal to percentage with one decimal with rounding", () => {
    expect(formatPercentage(100.123)).toBe("100.1%");
    expect(formatPercentage(100.153)).toBe("100.2%");
  });
});
