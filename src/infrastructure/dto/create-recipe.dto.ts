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

/**
 * interface ICreateRecipeDto
 *
 * @export
 * @class CreateRecipeDto
 * @typedef {CreateRecipeDto}
 * @implements {ICreateRecipeDto}
 */
export class CreateRecipeDto implements ICreateRecipeDto {
  /**
   * name of the recipe
   *
   * @type {string} name
   */
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * description of the recipe
   *
   * @type {string} description
   */
  @IsString()
  @IsNotEmpty()
  description: string;

  /**
   * list of ingredients
   *
   * @type {Ingredients[]} ingredients
   */
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  ingredients: Ingredients[];

  /**
   * url of the photo
   *
   * @type {string} photoUrl
   */
  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;

  /**
   * list of steps
   *
   * @type {string[]} steps
   */
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @ArrayMinSize(1)
  steps: string[];

  /**
   * notes
   *
   * @type {string} notes
   */
  @IsString()
  @IsNotEmpty()
  notes: string;

  /**
   * servings
   *
   * @type {number} servings
   */
  @IsNumber()
  @IsPositive()
  servings: number;

  /**
   * nutrition info
   *
   * @type {?string} nutritionInfo
   */
  @IsString()
  @IsNotEmpty()
  nutritionInfo?: string;

  /**
   * user id
   *
   * @type {string} userId
   */
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  userId: string;
}

/**
 * class Ingredients
 *
 * @class Ingredients
 * @typedef {Ingredients}
 */
class Ingredients {
  /**
   * amount of ingredient
   *
   * @type {number} amount
   */
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  /**
   * ingredient id
   *
   * @type {string} ingredientId
   */
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  ingredientId: string;
}
