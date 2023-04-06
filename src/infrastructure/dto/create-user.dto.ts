import { ICreateUserDto } from '@domain/dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto implements ICreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  photoUrl: string;
  @IsNotEmpty()
  @IsString()
  googleId: string;
}
