import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

/**
 * mongoose config service
 *
 * @export
 * @class MongooseConfigService
 * @typedef {MongooseConfigService}
 * @implements {MongooseOptionsFactory}
 */
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  /**
   * Creates an instance of MongooseConfigService.
   *
   * @constructor
   * @param {ConfigService} configService config service
   */
  constructor(private readonly configService: ConfigService) {}

  /**
   * url
   *
   * @type {string} url
   */
  url = this.configService.get<string>('MONGO_URL');

  /**
   * database name
   *
   * @returns {MongooseModuleOptions} mongoose module options
   */
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://mongo:0cqHiaBZlPBY2Op9ywsZ@containers-us-west-92.railway.app:7172',
      dbName: 'kitchen-recipes',
    };
  }
}
