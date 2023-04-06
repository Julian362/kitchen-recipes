import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  host = this.configService.get<string>('MONGO_URL');

  port = this.configService.get<number>('MONGO_PORT');

  user = this.configService.get<string>('MONGO_USER');

  password = this.configService.get<string>('MONGO_PASSWORD');

  database = this.configService.get<string>('MONGO_NAME');

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: `mongodb://${this.user}:${this.password}@${this.host}:${this.port}`,
      dbName: this.database,
    };
  }
}
