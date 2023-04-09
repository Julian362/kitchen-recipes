import { ICreateMealPlannerDto } from '@domain/dto';
import {
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateMealPlannerDto implements ICreateMealPlannerDto {
  @IsArray()
  @ValidateNested({ each: true })
  amount: AmountDto[];

  @IsNotEmpty()
  @IsString()
  notes: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}

class AmountDto {
  @IsNumber()
  amount: number;
  @IsString()
  @IsMongoId()
  ingredientId: string;
}
