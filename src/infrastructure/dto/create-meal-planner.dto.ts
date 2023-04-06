import { ICreateMealPlannerDto } from '@domain/dto';
import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateMealPlannerDto implements ICreateMealPlannerDto {
  @IsObject()
  @ValidateNested({ each: true })
  menuDays: IMenuDay[];

  @IsNotEmpty()
  @IsString()
  notes: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

class IMenuDay {
  @IsString()
  day: string;

  @IsArray()
  @IsString({ each: true })
  recipes: string[];
}
