import {Category} from '../product/model/category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  category: Category;
}
