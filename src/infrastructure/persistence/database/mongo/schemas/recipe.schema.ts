import { RecipesModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { IngredientMongo } from './ingredient.schema';

@Schema({ collection: 'recipes', versionKey: false })
export class RecipeMongo extends RecipesModel {
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
        ingredient: { type: SchemaTypes.ObjectId, ref: IngredientMongo.name },
      },
    ],
    required: true,
  })
  ingredients: { amount: number; ingredientId: IngredientMongo['_id'] }[];

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

  @Prop({ type: String, required: true })
  userId: string;
}

export const RecipesSchema = SchemaFactory.createForClass(RecipeMongo);
export type RecipeDocument = HydratedDocument<RecipeMongo>;
