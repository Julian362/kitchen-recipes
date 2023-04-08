import { IUpdateIngredientDto } from '@domain/dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateIngredientDto implements IUpdateIngredientDto {
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  photoUrl?: string;
}
