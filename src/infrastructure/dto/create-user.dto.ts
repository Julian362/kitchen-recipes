import { ICreateUserDto } from '@domain/dto';
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
  @IsNotEmpty()
  @IsString()
  name: string;
  /**
   * email of the user
   *
   * @type {string} email
   */
  @IsNotEmpty()
  @IsString()
  email: string;
  /**
   * photo url of the user
   *
   * @type {string} photoUrl
   */
  @IsNotEmpty()
  @IsString()
  photoUrl: string;
  /**
   * google id of the user
   *
   * @type {string} googleId
   */
  @IsNotEmpty()
  @IsString()
  googleId: string;
}
