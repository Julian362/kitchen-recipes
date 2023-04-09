import { ICreateRecipeDto } from '@domain/dto';
import {
  ArrayMinSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateRecipeDto implements ICreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  ingredients: Ingredients[];

  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;

  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @ArrayMinSize(1)
  steps: string[];

  @IsString()
  @IsNotEmpty()
  notes: string;

  @IsNumber()
  @IsPositive()
  servings: number;

  @IsString()
  @IsNotEmpty()
  nutritionInfo?: string;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  userId: string;
}

class Ingredients {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  ingredientId: string;
}
