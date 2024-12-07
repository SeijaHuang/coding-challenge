import {
  EACCOUNT_CATEGORY,
  EACCOUNT_TYPE,
  EVALUE_TYPE,
} from "../constants/account";
export interface IAccount {
  account_category: string;
  account_code: string;
  account_currency: string;
  account_identifier: string;
  account_status: string;
  value_type: string;
  account_name: string;
  account_type: string;
  account_type_bank: string;
  system_account: string;
  total_value: number;
}

export interface IAccountFilterOptions {
  account_category?: EACCOUNT_CATEGORY;
  account_type?: EACCOUNT_TYPE | EACCOUNT_TYPE[];
  value_type?: EVALUE_TYPE;
}
