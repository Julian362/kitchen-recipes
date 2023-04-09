import { ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { ValidateMongoId } from '../mongo-id.pipe';

describe('ValidateMongoId', () => {
  let validateMongoId: ValidateMongoId;

  beforeEach(() => {
    validateMongoId = new ValidateMongoId();
  });

  describe('transform', () => {
    it('should return the value if it is a valid Mongo ID', () => {
      const value = new ObjectId().toHexString();
      const metadata: ArgumentMetadata = { type: 'param', data: 'id' };
      expect(validateMongoId.transform(value, metadata)).toEqual(value);
    });

    it('should throw a BadRequestException if the value is not a valid Mongo ID', () => {
      const value = 'invalid-id';
      const metadata: ArgumentMetadata = { type: 'param', data: 'id' };
      expect(() => validateMongoId.transform(value, metadata)).toThrow(
        BadRequestException,
      );
    });
  });
});
