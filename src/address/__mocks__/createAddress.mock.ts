import { cityMock } from '../../city/__mocks__/city.mock';
import { CreateAddressDto } from '../dtos/createAddress.dto';
import { addressMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  complement: addressMock.complement,
  numberAddress: addressMock.numberAddress,
  cep: '12345-678',
  cityId: cityMock.id,
};
