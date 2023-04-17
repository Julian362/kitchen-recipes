import { ICreateRecipeDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'name of the recipe',
    example: 'recipe name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * description of the recipe
   *
   * @type {string} description
   */
  @ApiProperty({
    description: 'description of the recipe',
    example: 'recipe description',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  /**
   * list of ingredients
   *
   * @type {Ingredients[]} ingredients
   */
  @ApiProperty({
    description: 'list of ingredients',
    example: [
      {
        amount: 1,
        ingredientId: '5f9f1b9b9c9d1c0b8c8b9b9b',
      },
    ],
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  ingredients: Ingredients[];

  /**
   * url of the photo
   *
   * @type {string} photoUrl
   */
  @ApiProperty({
    description: 'url of the photo',
    example: 'https://www.google.com',
  })
  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;

  /**
   * list of steps
   *
   * @type {string[]} steps
   */
  @ApiProperty({
    description: 'list of steps',
    example: ['step 1', 'step 2'],
  })
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @ArrayMinSize(1)
  steps: string[];

  /**
   * notes
   *
   * @type {string} notes
   */
  @ApiProperty({
    description: 'notes',
    example: 'notes',
  })
  @IsString()
  @IsNotEmpty()
  notes: string;

  /**
   * servings
   *
   * @type {number} servings
   */
  @ApiProperty({
    description: 'servings',
    example: 1,
  })
  @IsNumber()
  @IsPositive()
  servings: number;

  /**
   * nutrition info
   *
   * @type {?string} nutritionInfo
   */
  @ApiProperty({
    description: 'nutrition info',
    example: 'nutrition info',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  nutritionInfo?: string;

  /**
   * user id
   *
   * @type {string} userId
   */
  @ApiProperty({
    description: 'user id',
    example: '5f9f1b9b9c9d1c0b8c8b9b9b',
  })
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
