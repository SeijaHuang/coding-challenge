import { EACCOUNT_CURRENCY } from "../constants/account";
import { LOCALES } from "../constants/locals";

export function formatCurrency(
  value: number,
  currency: EACCOUNT_CURRENCY
): string {
  return new Intl.NumberFormat(LOCALES[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Math.trunc(value));
}

export function formatPercentage(value: number): string {
  return value.toFixed(1) + "%";
}
