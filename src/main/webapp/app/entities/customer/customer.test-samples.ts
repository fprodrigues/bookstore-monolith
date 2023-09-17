import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
  name: 'Operations',
  email: 'Vitria.Pereira8@yahoo.com',
};

export const sampleWithPartialData: ICustomer = {
  id: 75018,
  name: 'Marrocos Cambridgeshire',
  email: 'AnaLuiza_Souza@yahoo.com',
  phone: '(31) 48675-2377',
};

export const sampleWithFullData: ICustomer = {
  id: 65456,
  name: 'front-end Toalhas',
  email: 'EnzoGabriel.Moraes5@live.com',
  address: 'withdrawal Mato',
  phone: '+55 (29) 8782-1030',
};

export const sampleWithNewData: NewCustomer = {
  name: 'Jogos Analyst',
  email: 'MariaCeclia.Saraiva82@live.com',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
