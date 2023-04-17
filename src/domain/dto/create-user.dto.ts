/**
 * interface for create user dto
 *
 * @export
 * @interface ICreateUserDto
 * @typedef {ICreateUserDto}
 */
export interface ICreateUserDto {
  /**
   * name of user
   *
   * @type {string} name
   */
  name: string;
  /**
   * email of user
   *
   * @type {string} email
   */
  email: string;
  /**
   * photo url of user
   *
   * @type {string} photoUrl
   */
  photoUrl: string;
  /**
   * google id of user
   *
   * @type {string} googleId
   */
  googleId: string;
}
