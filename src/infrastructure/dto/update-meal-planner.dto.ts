import { IUpdateMealPlannerDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

/**
 * interface IUpdateMealPlannerDto
 *
 * @export
 * @class UpdateMealPlannerDto
 * @typedef {UpdateMealPlannerDto}
 * @implements {IUpdateMealPlannerDto}
 */
export class UpdateMealPlannerDto implements IUpdateMealPlannerDto {
  /**
   * name of the meal planner
   *
   * @type {?string} name
   */
  @ApiProperty({
    description: 'name of the meal planner',
    example: 'meal planner name',
  })
  @IsOptional()
  @IsString()
  name?: string;
  /**
   * amount of the meal planner
   *
   * @type {?AmountDto[]} amount
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
  @IsOptional()
  amount?: AmountDto[];
  /**
   * notes of the meal planner
   *
   * @type {?string} notes
   */
  @ApiProperty({
    description: 'notes of the meal planner',
    example: 'this is a note',
  })
  @IsOptional()
  @IsString()
  notes?: string;
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
   * id of the ingredient
   *
   * @type {string} ingredientId
   */
  @IsString()
  ingredientId: string;
}
