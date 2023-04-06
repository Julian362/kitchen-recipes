import { ICreateRecipeDto } from '@domain/dto';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateRecipe implements ICreateRecipeDto {
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
}

class Ingredients {
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsString()
  ingredient: string;
}
