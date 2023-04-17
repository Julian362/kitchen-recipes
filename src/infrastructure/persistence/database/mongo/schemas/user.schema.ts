import { UserModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { MealPlannerMongo } from './meal-planner.schema';

/**
 * class for user model
 *
 * @export
 * @class UserMongo
 * @typedef {UserMongo}
 * @extends {UserModel}
 */
@Schema({
  collection: 'users',
  versionKey: false,
  strict: false,
})
export class UserMongo extends UserModel {
  /**
   * id of the user
   *
   * @type {?string} id of the user
   */
  @Prop({
    type: SchemaTypes.ObjectId,
    auto: true,
  })
  _id?: string;

  /**
   * name of the user
   *
   * @type {string} name of the user
   */
  @Prop({ type: String, required: true })
  name: string;

  /**
   * email of the user
   *
   * @type {string} email of the user
   */
  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email: string;

  /**
   * photo url of the user
   *
   * @type {string} photo url of the user
   */
  @Prop({ type: String, required: true })
  photoUrl: string;

  /**
   * google id of the user
   *
   * @type {string} google id of the user
   */
  @Prop({ type: String, required: true, unique: true })
  googleId: string;

  /**
   * meal planner id of the user
   *
   * @type {MealPlannerMongo['_id']} meal planner id of the user
   */
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MealPlannerMongo.name,
  })
  mealPlannerId: MealPlannerMongo['_id'];
}

/**
 * schema for user model
 *
 * @type {*}
 */
export const UserSchema = SchemaFactory.createForClass(UserMongo);
/**
 * type for user document
 *
 * @export
 * @typedef {UserDocument}
 */
export type UserDocument = HydratedDocument<UserMongo>;
