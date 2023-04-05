import { IIngredientDomainModel } from './interfaces/ingredient.domain-model.interface';

export class IngredientDomainModel implements IIngredientDomainModel {
  name: string;
  description: string;
  unit: number;
  photoUrl: string;
}
