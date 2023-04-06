import { IngredientDomainModel } from '@domain/models';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

@Schema({ collection: 'ingredients', versionKey: false })
export class IngredientMongo extends IngredientDomainModel {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id?: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  unit: number;

  @Prop({ type: String, required: true })
  photoUrl: string;
}

export const IngredientsSchema = SchemaFactory.createForClass(IngredientMongo);
export type IngredientDocument = HydratedDocument<IngredientMongo>;
