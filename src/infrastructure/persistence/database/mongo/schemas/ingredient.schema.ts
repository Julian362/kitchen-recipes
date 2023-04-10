import { IngredientModel } from '@infrastructure/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@Schema({ collection: 'ingredients', versionKey: false })
export class IngredientMongo extends IngredientModel {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  photoUrl: string;
}

export const IngredientsSchema = SchemaFactory.createForClass(IngredientMongo);
export type IngredientDocument = HydratedDocument<IngredientMongo>;
