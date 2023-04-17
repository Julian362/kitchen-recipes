import { IUpdateRecipesDto } from '@domain/dto';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

/**
 * interface IUpdateRecipesDto
 *
 * @export
 * @class UpdateRecipeDto
 * @typedef {UpdateRecipeDto}
 * @implements {IUpdateRecipesDto}
 */
export class UpdateRecipeDto implements IUpdateRecipesDto {
  /**
   * name of the recipe
   *
   * @type {?string} name
   */
  @IsString()
  @IsOptional()
  name?: string;
  /**
   * list of ingredients
   *
   * @type {?IngredientDto[]} ingredients
   */
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  ingredients?: IngredientDto[];
  /**
   * description of the recipe
   *
   * @type {?string} description
   */
  @IsString()
  @IsOptional()
  description?: string;
  /**
   * url of the photo
   *
   * @type {?string} photoUrl
   */
  @IsString()
  @IsOptional()
  photoUrl?: string;
  /**
   * list of steps
   *
   * @type {?string[]} steps
   */
  @IsString({ each: true })
  @IsOptional()
  steps?: string[];
  /**
   * notes
   *
   * @type {?string} notes
   */
  @IsString()
  @IsOptional()
  notes?: string;
  /**
   * number of servings
   *
   * @type {?number} servings
   */
  @IsNumber()
  @IsOptional()
  servings?: number;
  /**
   * nutrition info
   *
   * @type {?string} nutritionInfo
   */
  @IsString()
  @IsOptional()
  nutritionInfo?: string;
}

/**
 * class for ingredient dto
 *
 * @class IngredientDto
 * @typedef {IngredientDto}
 */
class IngredientDto {
  /**
   * amount of ingredient
   *
   * @type {number} amount
   */
  @IsNumber()
  amount: number;
  /**
   * id of ingredient
   *
   * @type {string} ingredientId
   */
  @IsString()
  ingredientId: string;
}
