import { ICreateIngredientDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'name of the ingredient',
    example: 'tomato',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * description of the ingredient
   *
   * @type {string} description
   */
  @ApiProperty({
    description: 'description of the ingredient',
    example: 'tomato is a fruit',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  /**
   * photo url of the ingredient
   *
   * @type {string} photoUrl
   */
  @ApiProperty({
    description: 'photo url of the ingredient',
    example:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  })
  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;
}
