import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { RecipeDocument, RecipeMongo } from '../schemas';
import { IBaseRepository } from './Interface';
import { IFindAll } from './Interface/find-all.interface';
import { IUpdateRepository } from './Interface/update.interface';

@Injectable()
export class RecipeRepository
  implements
    IBaseRepository<RecipeMongo>,
    IUpdateRepository<RecipeMongo>,
    IFindAll<RecipeMongo>
{
  constructor(
    @InjectModel(RecipeMongo.name)
    private readonly repository: Model<RecipeDocument>,
  ) {}
  update(_id: string, entity: RecipeMongo): Observable<RecipeMongo> {
    return from(this.repository.findByIdAndUpdate(_id, entity));
  }
  create(entity: RecipeMongo): Observable<RecipeMongo> {
    return from(this.repository.create(entity));
  }
  findById(document: string): Observable<RecipeMongo> {
    return from(this.repository.findById(document));
  }
  delete(_id: string): Observable<RecipeMongo> {
    return from(this.repository.findByIdAndDelete(_id));
  }
  findAll(): Observable<RecipeMongo[]> {
    return from(this.repository.find()) as Observable<RecipeMongo[]>;
  }
}
