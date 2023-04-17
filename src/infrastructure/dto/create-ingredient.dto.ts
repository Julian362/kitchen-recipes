import { ICreateIngredientDto } from '@domain/dto';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

/**
 * class CreateIngredientDto
 *
 * @export
 * @class CreateIngredientDto
 * @typedef {CreateIngredientDto}
 * @implements {ICreateIngredientDto}
 */
export class CreateIngredientDto implements ICreateIngredientDto {
  /**
   * name of the ingredient
   *
   * @type {string} name
   */
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * description of the ingredient
   *
   * @type {string} description
   */
  @IsString()
  @IsNotEmpty()
  description: string;

  /**
   * photo url of the ingredient
   *
   * @type {string} photoUrl
   */
  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;
}
