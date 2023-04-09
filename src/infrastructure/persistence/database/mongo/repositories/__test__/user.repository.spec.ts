import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { of, throwError } from 'rxjs';
import { UserRepository } from '../..';
import { userMongo } from '../../__mocks__/repository.mock';
import { UserDocument, UserMongo } from '../../schemas';

describe('UserRepository', () => {
  let userRepository: UserRepository;
  let userModel: Model<UserDocument>;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        UserRepository,
        {
          provide: getModelToken(UserMongo.name),
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            findByIdAndDelete: jest.fn(),
            find: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    userRepository = app.get<UserRepository>(UserRepository);
    userModel = app.get<Model<UserDocument>>(getModelToken(UserMongo.name));
  });

  describe('create', () => {
    it('should return a user', (done) => {
      // Arrange & Act
      jest.spyOn(userModel, 'create').mockReturnValueOnce(of(userMongo) as any);

      userRepository.create(userMongo).subscribe({
        // Assert
        next: (result) => {
          expect(userModel.create).toBeCalledWith(userMongo);
          expect(result).toBe(userMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(userModel, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      userRepository.create(userMongo).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should return a user', (done) => {
      // Arrange & Act
      jest
        .spyOn(userModel, 'findById')
        .mockReturnValueOnce(of(userMongo) as any);

      userRepository.findById('id').subscribe({
        // Assert
        next: (result) => {
          expect(userModel.findById).toBeCalledWith('id');
          expect(result).toBe(userMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(userModel, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      userRepository.findById('id').subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('delete', () => {
    it('should return a user', (done) => {
      // Arrange & Act
      jest
        .spyOn(userModel, 'findByIdAndDelete')
        .mockReturnValueOnce(of(userMongo) as any);

      userRepository.delete('id').subscribe({
        // Assert
        next: (result) => {
          expect(userModel.findByIdAndDelete).toBeCalledWith('id');
          expect(result).toBe(userMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(userModel, 'findByIdAndDelete')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      userRepository.delete('id').subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });
});
