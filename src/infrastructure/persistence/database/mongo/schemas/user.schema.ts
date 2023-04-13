import { UserModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { MealPlannerMongo } from './meal-planner.schema';

@Schema({
  collection: 'users',
  versionKey: false,
  strict: false,
})
export class UserMongo extends UserModel {
  @Prop({
    type: SchemaTypes.ObjectId,
    auto: true,
  })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ type: String, required: true })
  photoUrl: string;

  @Prop({ type: String, required: true, unique: true })
  googleId: string;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MealPlannerMongo.name,
  })
  mealPlannerId: MealPlannerMongo['_id'];
}

export const UserSchema = SchemaFactory.createForClass(UserMongo);
export type UserDocument = HydratedDocument<UserMongo>;
