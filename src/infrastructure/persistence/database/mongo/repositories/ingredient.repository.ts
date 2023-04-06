import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import {
  IngredientDocument,
  IngredientMongo,
} from '../schemas/ingredient.schema';
import { IBaseRepository } from './Interface';
import { IFindAll } from './Interface/find-all.interface';
import { IUpdateRepository } from './Interface/update.interface';

@Injectable()
export class IngredientRepository
  implements
    IBaseRepository<IngredientMongo>,
    IUpdateRepository<IngredientMongo>,
    IFindAll<IngredientMongo>
{
  constructor(
    @InjectModel(IngredientMongo.name)
    private readonly repository: Model<IngredientDocument>,
  ) {}
  create(entity: IngredientMongo): Observable<IngredientMongo> {
    return from(this.repository.create(entity));
  }
  findById(document: string): Observable<IngredientMongo> {
    return from(this.repository.findById(document));
  }
  delete(_id: string): Observable<IngredientMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }
  update(_id: string, entity: IngredientMongo): Observable<IngredientMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity));
  }
  findAll(): Observable<IngredientMongo[]> {
    return from(this.repository.find()) as Observable<IngredientMongo[]>;
  }
  findByName(name: string): Observable<IngredientMongo> {
    return from(this.repository.findOne({ name }));
  }
}
