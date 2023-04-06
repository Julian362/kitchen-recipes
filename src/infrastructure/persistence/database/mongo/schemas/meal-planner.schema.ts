import { MealPlannerDomainModel } from '@domain/models';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { IngredientMongo } from './ingredient.schema';
import { RecipeMongo } from './recipe.schema';

export class MealPlannerMongo extends MealPlannerDomainModel {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({
    type: [
      {
        day: String,
        recipes: [{ type: SchemaTypes.ObjectId, ref: 'Recipe' }],
      },
    ],
    required: true,
  })
  menuDays: { day: string; recipes: RecipeMongo[] }[];

  @Prop({
    type: [
      {
        ingredients: { type: SchemaTypes.ObjectId, ref: 'Ingredient' },
        amount: Number,
      },
    ],
    required: true,
  })
  amount: { ingredients: IngredientMongo; amount: number }[];

  @Prop({ type: String, required: true })
  notes: string;
}

export const MealPlannerSchema = SchemaFactory.createForClass(MealPlannerMongo);
export type MealPlannerDocument = HydratedDocument<MealPlannerMongo>;
