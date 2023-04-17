import { IUpdateRecipesDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'name of the recipe',
    example: 'recipe name',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;
  /**
   * list of ingredients
   *
   * @type {?IngredientDto[]} ingredients
   */
  @ApiProperty({
    description: 'list of ingredients',

    example: [
      {
        amount: 1,
        ingredientId: '5f9f1b9b9c9d1c0b8c8b9b9b',
      },
    ],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  ingredients?: IngredientDto[];
  /**
   * description of the recipe
   *
   * @type {?string} description
   */
  @ApiProperty({
    description: 'description of the recipe',
    example: 'this is a description',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
  /**
   * url of the photo
   *
   * @type {?string} photoUrl
   */
  @ApiProperty({
    description: 'url of the photo',
    example: 'https://www.google.com',
    required: false,
  })
  @IsString()
  @IsOptional()
  photoUrl?: string;
  /**
   * list of steps
   *
   * @type {?string[]} steps
   */
  @ApiProperty({
    description: 'list of steps',
    example: ['step 1', 'step 2'],
    required: false,
  })
  @IsString({ each: true })
  @IsOptional()
  steps?: string[];
  /**
   * notes
   *
   * @type {?string} notes
   */
  @ApiProperty({
    description: 'notes',
    example: 'this is a note',
    required: false,
  })
  @IsString()
  @IsOptional()
  notes?: string;
  /**
   * number of servings
   *
   * @type {?number} servings
   */
  @ApiProperty({
    description: 'number of servings',
    example: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  servings?: number;
  /**
   * nutrition info
   *
   * @type {?string} nutritionInfo
   */
  @ApiProperty({
    description: 'nutrition info',
    example: 'this is nutrition info',
    required: false,
  })
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
