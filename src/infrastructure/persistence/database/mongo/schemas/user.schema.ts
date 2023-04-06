import { UserDomainModel } from '@domain/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { MealPlannerMongo } from './meal-planner.schema';
import { RecipeMongo } from './recipe.schema';

@Schema({
  collection: 'users',
  versionKey: false,
})
export class UserMongo extends UserDomainModel {
  @Prop({
    type: SchemaTypes.ObjectId,
    auto: true,
  })
  _id?: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  photoUrl: string;

  @Prop({ type: String, required: true, unique: true })
  googleId: string;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Recipe' })
  recipes?: RecipeMongo[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'MealPlanner' })
  mealPlanner?: MealPlannerMongo[];
}

export const UserSchema = SchemaFactory.createForClass(UserMongo);
export type UserDocument = HydratedDocument<UserMongo>;
