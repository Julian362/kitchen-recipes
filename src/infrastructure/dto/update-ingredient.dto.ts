import { IUpdateIngredientDto } from '@domain/dto';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateIngredientDto implements IUpdateIngredientDto {
  @IsString()
  name?: string;
  @IsString()
  description?: string;
  @IsNumber()
  @IsPositive()
  unit?: number;
  @IsString()
  photoUrl?: string;
}
