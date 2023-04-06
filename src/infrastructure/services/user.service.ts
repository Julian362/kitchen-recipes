import { UserMongoService } from '@infrastructure/persistence/database/mongo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends UserMongoService {}
