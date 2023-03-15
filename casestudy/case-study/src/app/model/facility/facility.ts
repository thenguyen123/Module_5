import {FacilityTypes} from './facility-types';
import {RentTypes} from './rent-types';

export interface Facility {
  id?: number;
  img?: string;
  name?: string;
  cost?: number;
  area?: number;
  maxPeople?: number;
  rentType?: RentTypes;
  facilityType?: FacilityTypes;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  poolArea?: number;
  numberOfFloors?: number;
  facilityFree?: string;
}
