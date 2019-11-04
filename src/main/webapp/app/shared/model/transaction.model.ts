import { Moment } from 'moment';

export interface ITransaction {
  id?: string;
  recipientName?: string;
  accountNumber?: string;
  amount?: number;
  transactionTime?: Moment;
}

export const defaultValue: Readonly<ITransaction> = {};
