import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';

@Injectable()
export class ValidateMongoId implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    return ObjectId.isValid(value) && String(new ObjectId(value)) === value
      ? value
      : (() => {
          throw new BadRequestException('Invalid Mongo ID');
        })();
  }
}
