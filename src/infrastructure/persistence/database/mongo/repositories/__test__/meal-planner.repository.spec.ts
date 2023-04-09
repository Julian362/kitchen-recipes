import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { of, throwError } from 'rxjs';
import { id, mealPlannerMongo } from '../../__mocks__/repository.mock';
import { MealPlannerDocument, MealPlannerMongo } from '../../schemas';
import { MealPlannerRepository } from '../meal-planner.repository';

describe('MealPlannerRepository', () => {
  let mealPlannerRepository: MealPlannerRepository;
  let mealPlannerModel: Model<MealPlannerDocument>;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        MealPlannerRepository,
        {
          provide: getModelToken(MealPlannerMongo.name),
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndDelete: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    mealPlannerRepository = app.get<MealPlannerRepository>(
      MealPlannerRepository,
    );
    mealPlannerModel = app.get<Model<MealPlannerDocument>>(
      getModelToken(MealPlannerMongo.name),
    );
  });

  describe('update', () => {
    it('should return a meal planner', (done) => {
      // Arrange & Act

      jest
        .spyOn(mealPlannerModel, 'findByIdAndUpdate')
        .mockReturnValueOnce(of(mealPlannerMongo) as any);

      mealPlannerRepository.update(id, mealPlannerMongo).subscribe({
        // Assert
        next: (result) => {
          expect(mealPlannerModel.findByIdAndUpdate).toBeCalledWith(
            mealPlannerMongo._id,
            mealPlannerMongo,
          );
          expect(result).toBe(mealPlannerMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'findByIdAndUpdate')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      mealPlannerRepository.update(id, mealPlannerMongo).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('create', () => {
    it('should return a meal planner', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'create')
        .mockReturnValueOnce(of(mealPlannerMongo) as any);

      mealPlannerRepository.create(mealPlannerMongo).subscribe({
        // Assert
        next: (result) => {
          expect(mealPlannerModel.create).toBeCalledWith(mealPlannerMongo);
          expect(result).toBe(mealPlannerMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      mealPlannerRepository.create(mealPlannerMongo).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should return a meal planner', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'findById')
        .mockReturnValueOnce(of(mealPlannerMongo) as any);

      mealPlannerRepository.findById(id).subscribe({
        // Assert
        next: (result) => {
          expect(mealPlannerModel.findById).toBeCalledWith(id);
          expect(result).toBe(mealPlannerMongo);
          done();
        },
      });
    });

    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      mealPlannerRepository.findById(id).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('delete', () => {
    it('should return a meal planner', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'findByIdAndDelete')
        .mockReturnValueOnce(of(mealPlannerMongo) as any);

      mealPlannerRepository.delete(id).subscribe({
        // Assert
        next: (result) => {
          expect(mealPlannerModel.findByIdAndDelete).toBeCalledWith(id);
          expect(result).toBe(mealPlannerMongo);
          done();
        },
      });
    });

    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(mealPlannerModel, 'findByIdAndDelete')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      mealPlannerRepository.delete(id).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });
});
