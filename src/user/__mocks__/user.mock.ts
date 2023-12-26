import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123456789',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 4244,
  name: 'name',
  password: 'password',
  phone: '123456789',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
