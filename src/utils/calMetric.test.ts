import { describe, expect, test } from "vitest";
import {
  getExpense,
  getRevenue,
  getGrossProfitMargin,
  getNetProfitMargin,
  getWorkingCapitalRatio,
} from "./calMetric.ts";
import { IAccount } from "../interface/account";

const mockIndividualAccountData: Partial<IAccount> = {
  account_category: "revenue",
  account_code: "200",
  value_type: "credit",
  account_type: "overheads",
  total_value: 100.0,
};

const mockAccountData: Partial<IAccount>[] = [
  //for revenue
  mockIndividualAccountData,
  { ...mockIndividualAccountData, total_value: 200.0 },
  { ...mockIndividualAccountData, total_value: 300.0 },

  //for expense
  {
    ...mockIndividualAccountData,
    account_category: "expense",
    total_value: 150.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "expense",
    total_value: 1000.0,
  },

  //for GPM
  {
    ...mockIndividualAccountData,
    account_type: "sales",
    value_type: "debit",
    total_value: 300.0,
  },
  {
    ...mockIndividualAccountData,
    account_type: "sales",
    value_type: "debit",
    total_value: 200.0,
  },

  //for WCR
  {
    ...mockIndividualAccountData,
    account_category: "assets",
    value_type: "debit",
    account_type: "current",
    total_value: 500.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "assets",
    value_type: "debit",
    account_type: "bank",
    total_value: 500.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "assets",
    value_type: "debit",
    account_type: "current_accounts_receivable",
    total_value: 500.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "assets",
    value_type: "credit",
    account_type: "current",
    total_value: 400.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "assets",
    value_type: "credit",
    account_type: "bank",
    total_value: 400.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "assets",
    value_type: "credit",
    account_type: "current_accounts_receivable",
    total_value: 400.0,
  },

  {
    ...mockIndividualAccountData,
    account_category: "liability",
    value_type: "credit",
    account_type: "current",
    total_value: 500.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "liability",
    value_type: "credit",
    account_type: "current_accounts_payable",
    total_value: 500.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "liability",
    value_type: "debit",
    account_type: "current",
    total_value: 400.0,
  },
  {
    ...mockIndividualAccountData,
    account_category: "liability",
    value_type: "debit",
    account_type: "current_accounts_payable",
    total_value: 400.0,
  },
];

describe("getRevenue", () => {
  test("should return the total value of revenue accounts", () => {
    expect(getRevenue(mockAccountData as IAccount[])).toBe(1100);
  });
});

describe("getExpense", () => {
  test("should return the total value of expense accounts", () => {
    expect(getExpense(mockAccountData as IAccount[])).toBe(1150);
  });
});

describe("getGrossProfitMargin", () => {
  test("should return the gross profit margin", () => {
    expect(getGrossProfitMargin(mockAccountData as IAccount[])).toBe(
      (500 / 1100) * 100
    );
  });
});

describe("getNetProfitMargin", () => {
  test("should return the net profit margin", () => {
    expect(getNetProfitMargin(mockAccountData as IAccount[])).toBe(
      ((1100 - 1150) / 1100) * 100
    );
  });
});

describe("getWorkingCapitalRatio", () => {
  test("should return the working capital ratio", () => {
    expect(getWorkingCapitalRatio(mockAccountData as IAccount[])).toBe(
      (300 / 200) * 100
    );
  });
});
