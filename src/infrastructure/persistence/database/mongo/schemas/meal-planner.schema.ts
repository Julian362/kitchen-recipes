import { MealPlannerModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { IngredientMongo } from './ingredient.schema';
/**
 * class MealPlannerMongo
 *
 * @export
 * @class MealPlannerMongo
 * @typedef {MealPlannerMongo}
 * @extends {MealPlannerModel}
 */
@Schema({ collection: 'meal-planners', versionKey: false })
export class MealPlannerMongo extends MealPlannerModel {
  /**
   * id of the meal planner
   *
   * @type {?string} id of the meal planner
   */
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id?: string;

  /**
   * name of the meal planner
   *
   * @type {string} name of the meal planner
   */
  @Prop({ type: String, required: true })
  name: string;

  /**
   * description of the meal planner
   *
   * @type {{ ingredientId: IngredientMongo['_id']; amount: number }[]} description of the meal planner
   */
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

  /**
   * photo url of the meal planner
   *
   * @type {string} photo url of the meal planner
   */
  @Prop({ type: String, required: true })
  notes: string;
}

/**
 * MealPlannerSchema
 *
 * @type {*}
 */
export const MealPlannerSchema = SchemaFactory.createForClass(MealPlannerMongo);
/**
 * MealPlannerDocument
 *
 * @export
 * @typedef {MealPlannerDocument}
 */
export type MealPlannerDocument = HydratedDocument<MealPlannerMongo>;
