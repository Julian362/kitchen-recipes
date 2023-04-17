import { IUpdateIngredientDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'name of the ingredient',
    example: 'ingredient name',
  })
  @IsString()
  @IsOptional()
  name?: string;
  /**
   * description of the ingredient
   *
   * @type {?string} description
   */
  @ApiProperty({
    description: 'description of the ingredient',
    example: 'this is a description',
  })
  @IsString()
  @IsOptional()
  description?: string;
  /**
   * photo url of the ingredient
   *
   * @type {?string} photoUrl
   */
  @ApiProperty({
    description: 'photo url of the ingredient',
    example:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  })
  @IsString()
  @IsOptional()
  photoUrl?: string;
}
