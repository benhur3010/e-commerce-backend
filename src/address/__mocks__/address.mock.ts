import { userEntityMock } from '../../user/__mocks__/user.mock';
import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  id: 1,
  cityId: cityMock.id,
  complement: 'test',
  cep: '12345-678',
  numberAddress: 1,
  userId: userEntityMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
