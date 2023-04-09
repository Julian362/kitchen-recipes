import { IUserDomainModel } from './interfaces/user.domain-model.interface';

export class UserDomainModel implements IUserDomainModel {
  mealPlannerId?: string;
  name: string;
  email: string;
  photoUrl: string;
  googleId: string;
}
