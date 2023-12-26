import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  id: 145324,
  stateId: stateMock.id,
  name: 'cityName',
  createdAt: new Date(),
  updatedAt: new Date(),
};
