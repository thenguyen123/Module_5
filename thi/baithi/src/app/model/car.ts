import {Address} from './address';
import {Cartype} from './cartype';


export interface Car {
  id: string;
  carType: Cartype;
  name: string;
  departure: Address;
  destination: Address;
  phoneNumber: string;
  email: string;
  toHour: string;
  formHour: string;
}
