import { ICreateMealPlannerDto } from '@domain/dto';
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
  @IsArray()
  @ValidateNested({ each: true })
  amount: AmountDto[];

  /**
   * notes of the meal planner
   *
   * @type {string} notes
   */
  @IsNotEmpty()
  @IsString()
  notes: string;

  /**
   * name of the meal planner
   *
   * @type {string} name
   */
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
