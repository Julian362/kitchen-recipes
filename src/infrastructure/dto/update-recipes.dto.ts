import { IUpdateRecipesDto } from '@domain/dto';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateRecipesDto implements IUpdateRecipesDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  ingredients?: IngredientDto[];
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  photoUrl?: string;
  @IsString({ each: true })
  @IsOptional()
  steps?: string[];
  @IsString()
  notes?: string;
  @IsNumber()
  @IsOptional()
  servings?: number;
  @IsString()
  @IsOptional()
  nutritionInfo?: string;
}

class IngredientDto {
  @IsNumber()
  amount: number;
  @IsString()
  ingredientId: string;
}
