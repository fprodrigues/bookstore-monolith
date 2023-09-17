import dayjs from 'dayjs/esm';

import { IShoppingCart, NewShoppingCart } from './shopping-cart.model';

export const sampleWithRequiredData: IShoppingCart = {
  id: 126,
  purchaseDate: dayjs('2023-09-17T16:31'),
  status: 'Aço B2C',
};

export const sampleWithPartialData: IShoppingCart = {
  id: 96105,
  purchaseDate: dayjs('2023-09-17T13:37'),
  status: 'invoice Web',
};

export const sampleWithFullData: IShoppingCart = {
  id: 91317,
  purchaseDate: dayjs('2023-09-17T15:24'),
  status: 'synthesizing Mouse',
};

export const sampleWithNewData: NewShoppingCart = {
  purchaseDate: dayjs('2023-09-17T00:37'),
  status: 'Avenida Plástico',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
