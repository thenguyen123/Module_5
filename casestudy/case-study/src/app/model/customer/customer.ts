import {CustomerType} from './customerType';

export interface Customer {
  id?: number;
  name?: string;
  dayOfBrith?: string;
  gender?: boolean;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}


