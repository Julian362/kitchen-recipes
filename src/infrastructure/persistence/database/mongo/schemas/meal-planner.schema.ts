import { MealPlannerModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { IngredientMongo } from './ingredient.schema';
@Schema({ collection: 'meal-planners', versionKey: false })
export class MealPlannerMongo extends MealPlannerModel {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({
    type: [
      {
        ingredients: { type: SchemaTypes.ObjectId, ref: IngredientMongo.name },
        amount: Number,
      },
    ],
    required: true,
  })
  amount: { ingredientId: IngredientMongo['_id']; amount: number }[];

  @Prop({ type: String, required: true })
  notes: string;
}

export const MealPlannerSchema = SchemaFactory.createForClass(MealPlannerMongo);
export type MealPlannerDocument = HydratedDocument<MealPlannerMongo>;
