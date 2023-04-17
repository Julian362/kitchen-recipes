import { Injectable } from '@nestjs/common';
import { UserMongoService } from '../persistence/database/mongo/services/user.service';

/**
 * interface for the user service
 *
 * @export
 * @class UserService
 * @typedef {UserService}
 * @extends {UserMongoService}
 */
@Injectable()
export class UserService extends UserMongoService {}
