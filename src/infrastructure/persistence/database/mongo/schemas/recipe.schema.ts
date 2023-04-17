import { RecipesModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { IngredientMongo } from './ingredient.schema';

/**
 * class RecipeMongo
 *
 * @export
 * @class RecipeMongo
 * @typedef {RecipeMongo}
 * @extends {RecipesModel}
 */
@Schema({ collection: 'recipes', versionKey: false })
export class RecipeMongo extends RecipesModel {
  /**
   * id of the recipe
   *
   * @type {?string} _id
   */
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id?: string;

  /**
   * name of the recipe
   *
   * @type {string} name
   */
  @Prop({ type: String, required: true })
  name: string;

  /**
   * description of the recipe
   *
   * @type {string} description
   */
  @Prop({ type: String, required: true })
  description: string;

  /**
   * ingredients of the recipe
   *
   * @type {{ amount: number; ingredientId: IngredientMongo['_id'] }[]}
   */
  @Prop({
    type: [
      {
        amount: Number,
        ingredientId: { type: SchemaTypes.ObjectId, ref: IngredientMongo.name },
      },
    ],
    required: true,
  })
  ingredients: { amount: number; ingredientId: IngredientMongo['_id'] }[];

  /**
   * photo url of the recipe
   *
   * @type {string} photoUrl
   */
  @Prop({ type: String, required: true })
  photoUrl: string;

  /**
   * steps of the recipe
   *
   * @type {string[]} steps
   */
  @Prop({ type: [String], required: true })
  steps: string[];

  /**
   * notes of the recipe
   *
   * @type {?string} notes
   */
  @Prop({ type: String, required: true })
  notes?: string;

  /**
   * servings of the recipe
   *
   * @type {number} servings
   */
  @Prop({ type: Number, required: true })
  servings: number;

  /**
   * nutrition info of the recipe
   *
   * @type {?string} nutritionInfo
   */
  @Prop({ type: String, required: true })
  nutritionInfo?: string;

  /**
   * user id of the recipe
   *
   * @type {string} userId
   */
  @Prop({ type: String, required: true })
  userId: string;
}

/**
 * RecipesSchema
 *
 * @type {*} RecipesSchema
 */
export const RecipesSchema = SchemaFactory.createForClass(RecipeMongo);
/**
 * RecipeDocument
 *
 * @export
 * @typedef {RecipeDocument} RecipeDocument
 */
export type RecipeDocument = HydratedDocument<RecipeMongo>;
