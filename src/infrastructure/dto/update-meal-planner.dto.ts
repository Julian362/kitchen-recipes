import { IUpdateMealPlannerDto } from '@domain/dto';
import {
  ArrayMinSize,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateMealPlannerDto implements IUpdateMealPlannerDto {
  @IsString()
  name?: string;
  @IsObject()
  @ValidateNested({ each: true })
  @IsOptional()
  menuDays?: MenuDayDto[];
  notes?: string;
}

class MenuDayDto {
  @IsString()
  day: string;
  @IsNotEmpty({ each: true })
  @IsString({ each: true })
  @ArrayMinSize(1)
  recipesId: string[];
}
