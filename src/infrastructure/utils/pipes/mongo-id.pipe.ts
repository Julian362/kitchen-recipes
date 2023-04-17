import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';

/**
 * validate mongo id
 *
 * @export
 * @class ValidateMongoId
 * @typedef {ValidateMongoId}
 * @implements {PipeTransform<string>}
 */
@Injectable()
export class ValidateMongoId implements PipeTransform<string> {
  /**
   * transform
   *
   * @param {string} value - value
   * @param {ArgumentMetadata} metadata - metadata
   * @returns {string}
   */
  transform(value: string, metadata: ArgumentMetadata): string {
    return ObjectId.isValid(value) && String(new ObjectId(value)) === value
      ? value
      : (() => {
          throw new BadRequestException('Invalid Mongo ID');
        })();
  }
}
