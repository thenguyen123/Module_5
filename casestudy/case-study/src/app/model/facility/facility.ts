import {FacilityTypes} from './facility-types';
import {RentTypes} from './rent-types';

export interface Facility {
  img?: string;
  name?: string;
  cost?: number;
  area?: number;
  maxPeople?: number;
  rentType?: RentTypes;
  facilityType?: FacilityTypes;
  standRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityText?: string;
}
