import { ICreateMealPlannerDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

/**
 * interface ICreateMealPlannerDto
 *
 * @export
 * @class CreateMealPlannerDto
 * @typedef {CreateMealPlannerDto}
 * @implements {ICreateMealPlannerDto}
 */
export class CreateMealPlannerDto implements ICreateMealPlannerDto {
  /**
   * amount of the meal planner
   *
   * @type {AmountDto[]} amount
   */
  @ApiProperty({
    description: 'amount of the meal planner',
    example: [
      {
        amount: 1,
        ingredientId: '5f9f1b9b9c9d1c0b8c8b9b9b',
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  amount: AmountDto[];

  /**
   * notes of the meal planner
   *
   * @type {string} notes
   */
  @ApiProperty({
    description: 'notes of the meal planner',
    example: 'this is a note',
  })
  @IsNotEmpty()
  @IsString()
  notes: string;

  /**
   * name of the meal planner
   *
   * @type {string} name
   */
  @ApiProperty({
    description: 'name of the meal planner',
    example: 'meal planner name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}

/**
 * class AmountDto
 *
 * @class AmountDto
 * @typedef {AmountDto}
 */
class AmountDto {
  /**
   * amount of the ingredient
   *
   * @type {number} amount
   */
  @IsNumber()
  amount: number;
  /**
   * ingredient id of the ingredient
   *
   * @type {string} ingredientId
   */
  @IsString()
  @IsMongoId()
  ingredientId: string;
}
