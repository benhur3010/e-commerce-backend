import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123456789',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 4244,
  name: 'name',
  password: '$2b$10$XmK2JbiQKYb1yMH8CnhacOkFlliSbsQHS7r8TcWjctg81X6lCEQhO',
  phone: '123456789',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
