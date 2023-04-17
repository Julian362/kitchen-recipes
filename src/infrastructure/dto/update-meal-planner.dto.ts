import { IUpdateMealPlannerDto } from '@domain/dto';
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
  @IsOptional()
  @IsString()
  name?: string;
  /**
   * amount of the meal planner
   *
   * @type {?AmountDto[]} amount
   */
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  amount?: AmountDto[];
  /**
   * notes of the meal planner
   *
   * @type {?string} notes
   */
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
