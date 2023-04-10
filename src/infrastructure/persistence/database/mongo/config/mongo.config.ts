import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  url = this.configService.get<string>('MONGO_URL');

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.url,
    };
  }
}
