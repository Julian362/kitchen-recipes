import { IUpdateMealPlannerDto } from '@domain/dto';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateMealPlannerDto implements IUpdateMealPlannerDto {
  @IsString()
  name?: string;
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  amount?: AmountDto[];
  notes?: string;
}

class AmountDto {
  @IsNumber()
  amount: number;
  @IsString()
  ingredientId: string;
}
