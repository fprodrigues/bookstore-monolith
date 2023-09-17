import dayjs from 'dayjs/esm';

import { IOrder, NewOrder } from './order.model';

export const sampleWithRequiredData: IOrder = {
  id: 47761,
  orderDate: dayjs('2023-09-17T10:37'),
  status: 'Palau Alameda Genérico',
};

export const sampleWithPartialData: IOrder = {
  id: 61522,
  orderDate: dayjs('2023-09-17T17:59'),
  status: 'Rodovia Account Cambridgeshire',
};

export const sampleWithFullData: IOrder = {
  id: 80079,
  orderDate: dayjs('2023-09-17T15:49'),
  status: 'ferrugem reinvent International',
};

export const sampleWithNewData: NewOrder = {
  orderDate: dayjs('2023-09-17T12:11'),
  status: 'Sem 24/7 Intranet',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
