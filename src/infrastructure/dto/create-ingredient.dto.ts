import { ICreateIngredientDto } from '@domain/dto';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateIngredientDto implements ICreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  photoUrl: string;
}
