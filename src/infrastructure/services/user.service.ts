import { Injectable } from '@nestjs/common';
import { UserMongoService } from '../persistence/database/mongo/services/user.service';

@Injectable()
export class UserService extends UserMongoService {}
