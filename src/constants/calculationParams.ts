import { IAccountFilterOptions } from "../interface/account";
import { EACCOUNT_CATEGORY, EACCOUNT_TYPE, EVALUE_TYPE } from "./account";

export const REVENUE_PARAMS: IAccountFilterOptions = {
  account_category: EACCOUNT_CATEGORY.REVENUE,
};

export const EXPENSE_PARAMS: IAccountFilterOptions = {
  account_category: EACCOUNT_CATEGORY.EXPENSE,
};

export const GROSS_PROFIT_MARGIN_PARAMS: IAccountFilterOptions = {
  account_type: EACCOUNT_TYPE.SALES,
  value_type: EVALUE_TYPE.DEBIT,
};

export const ASSETS_MINUEND_PARAMS: IAccountFilterOptions = {
  account_category: EACCOUNT_CATEGORY.ASSETS,
  value_type: EVALUE_TYPE.DEBIT,
  account_type: [
    EACCOUNT_TYPE.CURRENT,
    EACCOUNT_TYPE.BANK,
    EACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
  ],
};

export const ASSETS_SUBTRAHEND_PARAMS: IAccountFilterOptions = {
  account_category: EACCOUNT_CATEGORY.ASSETS,
  value_type: EVALUE_TYPE.CREDIT,
  account_type: [
    EACCOUNT_TYPE.CURRENT,
    EACCOUNT_TYPE.BANK,
    EACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
  ],
};

export const LIABILITY_MINUEND_PARAMS: IAccountFilterOptions = {
  account_category: EACCOUNT_CATEGORY.LIABILITY,
  value_type: EVALUE_TYPE.CREDIT,
  account_type: [EACCOUNT_TYPE.CURRENT, EACCOUNT_TYPE.CURRENT_ACCOUNTS_PAYABLE],
};

export const LIABILITY_SUBTRAHEND_PARAMS: IAccountFilterOptions = {
  account_category: EACCOUNT_CATEGORY.LIABILITY,
  value_type: EVALUE_TYPE.DEBIT,
  account_type: [EACCOUNT_TYPE.CURRENT, EACCOUNT_TYPE.CURRENT_ACCOUNTS_PAYABLE],
};
