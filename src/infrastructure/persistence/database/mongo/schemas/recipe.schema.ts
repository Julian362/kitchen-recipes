import { RecipeDomainModel } from '@domain/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { IngredientMongo } from './ingredient.schema';

@Schema({ collection: 'recipes', versionKey: false })
export class RecipeMongo extends RecipeDomainModel {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id?: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({
    type: [
      {
        amount: Number,
        ingredient: { type: SchemaTypes.ObjectId, ref: 'Ingredient' },
      },
    ],
    required: true,
  })
  ingredients: { amount: number; ingredient: IngredientMongo }[];

  @Prop({ type: String, required: true })
  photoUrl: string;

  @Prop({ type: [String], required: true })
  steps: string[];

  @Prop({ type: String, required: true })
  notes?: string;

  @Prop({ type: Number, required: true })
  servings: number;

  @Prop({ type: String, required: true })
  nutritionInfo?: string;
}

export const RecipesSchema = SchemaFactory.createForClass(RecipeMongo);
export type RecipeDocument = HydratedDocument<RecipeMongo>;
