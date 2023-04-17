import { IUpdateIngredientDto } from '@domain/dto';
import { IsOptional, IsString } from 'class-validator';

/**
 * class UpdateIngredientDto
 *
 * @export
 * @class UpdateIngredientDto
 * @typedef {UpdateIngredientDto}
 * @implements {IUpdateIngredientDto}
 */
export class UpdateIngredientDto implements IUpdateIngredientDto {
  /**
   * name of the ingredient
   *
   * @type {?string} name
   */
  @IsString()
  @IsOptional()
  name?: string;
  /**
   * description of the ingredient
   *
   * @type {?string} description
   */
  @IsString()
  @IsOptional()
  description?: string;
  /**
   * photo url of the ingredient
   *
   * @type {?string} photoUrl
   */
  @IsString()
  @IsOptional()
  photoUrl?: string;
}
