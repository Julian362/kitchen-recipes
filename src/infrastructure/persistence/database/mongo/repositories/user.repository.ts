import { IBaseRepository } from '@infrastructure/persistence';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { UserDocument, UserMongo } from '../schemas/user.schema';

@Injectable()
export class UserRepository implements IBaseRepository<UserMongo> {
  constructor(
    @InjectModel(UserMongo.name)
    private readonly repository: Model<UserDocument>,
  ) {}
  create(entity: UserMongo): Observable<UserMongo> {
    return from(this.repository.create(entity));
  }
  findById(document: string): Observable<UserMongo> {
    return from(this.repository.findById(document));
  }
  delete(_id: string): Observable<UserMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }
}
