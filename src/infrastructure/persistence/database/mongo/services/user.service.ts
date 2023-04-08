import { IUserService } from '@domain/services/user.service';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories';
import { UserMongo } from '../schemas/user.schema';

@Injectable()
export class UserMongoService implements IUserService {
  constructor(private readonly userRepository: UserRepository) {}
  create(entity: UserMongo): Observable<UserMongo> {
    return this.userRepository.create(entity);
  }
  findById(id: string): Observable<UserMongo> {
    return this.userRepository.findById(id);
  }

  delete(id: string): Observable<UserMongo> {
    return this.userRepository.delete(id);
  }
}
