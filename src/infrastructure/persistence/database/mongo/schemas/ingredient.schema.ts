import { IngredientModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

/**
 * class IngredientMongo
 *
 * @export
 * @class IngredientMongo
 * @typedef {IngredientMongo}
 * @extends {IngredientModel}
 */
@Schema({ collection: 'ingredients', versionKey: false })
export class IngredientMongo extends IngredientModel {
  /**
   * id of the ingredient
   *
   * @type {string} _id
   */
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: string;

  /**
   * name of the ingredient
   *
   * @type {string} name
   */
  @Prop({ type: String, required: true, unique: true })
  name: string;

  /**
   * description of the ingredient
   *
   * @type {string} description
   */
  @Prop({ type: String, required: true })
  description: string;

  /**
   * photo url of the ingredient
   *
   * @type {string} photoUrl
   */
  @Prop({ type: String, required: true })
  photoUrl: string;
}

/**
 *  Schema for Ingredient
 *
 * @type {*}
 */
export const IngredientsSchema = SchemaFactory.createForClass(IngredientMongo);
/**
 * Schema for Ingredient
 *
 * @export
 * @typedef {IngredientDocument}
 */
export type IngredientDocument = HydratedDocument<IngredientMongo>;
