import {
  ASSETS_MINUEND_PARAMS,
  ASSETS_SUBTRAHEND_PARAMS,
  EXPENSE_PARAMS,
  GROSS_PROFIT_MARGIN_PARAMS,
  LIABILITY_MINUEND_PARAMS,
  LIABILITY_SUBTRAHEND_PARAMS,
  REVENUE_PARAMS,
} from "../constants/calculationParams";
import { IAccount, IAccountFilterOptions } from "../interface/account";

function calTotalValue(
  accountData: IAccount[],
  filterOptions: IAccountFilterOptions
): number {
  const filteredAccount = accountData.filter((account) => {
    return Object.entries(filterOptions).every(([key, value]) => {
      if (Array.isArray(value)) {
        return value.includes(account[key as keyof IAccountFilterOptions]);
      }
      return account[key as keyof IAccountFilterOptions] === value;
    });
  });
  return filteredAccount.reduce((acc, account) => acc + account.total_value, 0);
}

export function getRevenue(accountData: IAccount[]): number {
  return calTotalValue(accountData, REVENUE_PARAMS);
}

export function getExpense(accountData: IAccount[]): number {
  return calTotalValue(accountData, EXPENSE_PARAMS);
}

export function getGrossProfitMargin(accountData: IAccount[]): number {
  const revenue = getRevenue(accountData);
  return (
    (calTotalValue(accountData, GROSS_PROFIT_MARGIN_PARAMS) / revenue) * 100
  );
}

export function getNetProfitMargin(accountData: IAccount[]): number {
  const revenue = getRevenue(accountData);
  const expense = getExpense(accountData);
  return ((revenue - expense) / revenue) * 100;
}

export function getWorkingCapitalRatio(accountData: IAccount[]): number {
  const assets =
    calTotalValue(accountData, ASSETS_MINUEND_PARAMS) -
    calTotalValue(accountData, ASSETS_SUBTRAHEND_PARAMS);

  const liability =
    calTotalValue(accountData, LIABILITY_MINUEND_PARAMS) -
    calTotalValue(accountData, LIABILITY_SUBTRAHEND_PARAMS);
  return (assets / liability) * 100;
}
