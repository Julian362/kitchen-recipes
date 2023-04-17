import { ICreateUserDto } from '@domain/dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/**
 * class CreateUserDto
 *
 * @export
 * @class CreateUserDto
 * @typedef {CreateUserDto}
 * @implements {ICreateUserDto}
 */
export class CreateUserDto implements ICreateUserDto {
  /**
   * name of the user
   *
   * @type {string} name
   */
  @ApiProperty({
    description: 'name of the user',
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
  /**
   * email of the user
   *
   * @type {string} email
   */
  @ApiProperty({
    description: 'email of the user',
    example: 'jhon@gmail.comn',
  })
  @IsNotEmpty()
  @IsString()
  email: string;
  /**
   * photo url of the user
   *
   * @type {string} photoUrl
   */
  @ApiProperty({
    description: 'photo url of the user',
    example:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  })
  @IsNotEmpty()
  @IsString()
  photoUrl: string;
  /**
   * google id of the user
   *
   * @type {string} googleId
   */
  @ApiProperty({
    description: 'google id of the user',
    example: '123456789',
  })
  @IsNotEmpty()
  @IsString()
  googleId: string;
}
