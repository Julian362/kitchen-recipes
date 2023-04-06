import { IUpdateRecipesDto } from '@domain/dto';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateRecipesDto implements IUpdateRecipesDto {
  @IsString()
  name?: string;
  @IsObject()
  @ValidateNested({ each: true })
  @IsOptional()
  ingredients?: IngredientDto[];
  @IsString()
  description?: string;
  @IsString()
  photoUrl?: string;
  @IsString({ each: true })
  @IsOptional()
  steps?: string[];
  @IsString()
  notes?: string;
  @IsNumber()
  servings?: number;
  @IsString()
  nutritionInfo?: string;
}

class IngredientDto {
  @IsNumber()
  amount: number;
  @IsString()
  ingredientsId: string;
}
