import { ICreateIngredientDto } from '@domain/dto';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateIngredientDto implements ICreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  unit: number;

  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;
}
