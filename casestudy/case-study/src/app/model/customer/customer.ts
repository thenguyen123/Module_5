import {CustomerTypes} from './customer.types';

export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: boolean;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  delete?: boolean;
  customerType?: CustomerTypes;
}


