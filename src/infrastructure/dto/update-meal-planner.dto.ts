import { IUpdateMealPlannerDto } from '@domain/dto';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateMealPlannerDto implements IUpdateMealPlannerDto {
  @IsOptional()
  @IsString()
  name?: string;
  @IsArray()
  @ValidateNested({ each: true })
  @IsOptional()
  amount?: AmountDto[];
  @IsOptional()
  @IsString()
  notes?: string;
}

class AmountDto {
  @IsNumber()
  amount: number;
  @IsString()
  ingredientId: string;
}
