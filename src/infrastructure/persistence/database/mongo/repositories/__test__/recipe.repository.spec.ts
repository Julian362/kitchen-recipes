import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { of, throwError } from 'rxjs';
import { id, recipeMongo } from '../../__mocks__/repository.mock';
import { RecipeDocument, RecipeMongo } from '../../schemas';
import { RecipeRepository } from '../recipe.repository';

describe('RecipeRepository', () => {
  let recipeRepository: RecipeRepository;
  let recipeModel: Model<RecipeDocument>;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        RecipeRepository,
        {
          provide: getModelToken(RecipeMongo.name),
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

    recipeRepository = app.get<RecipeRepository>(RecipeRepository);
    recipeModel = app.get<Model<RecipeDocument>>(
      getModelToken(RecipeMongo.name),
    );
  });

  describe('update', () => {
    it('should return a recipe', (done) => {
      // Arrange & Act

      jest
        .spyOn(recipeModel, 'findByIdAndUpdate')
        .mockReturnValueOnce(of(recipeMongo) as any);

      recipeRepository.update(id, recipeMongo).subscribe({
        // Assert
        next: (result) => {
          expect(recipeModel.findByIdAndUpdate).toBeCalledWith(
            recipeMongo._id,
            recipeMongo,
            { new: true },
          );
          expect(result).toBe(recipeMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'findByIdAndUpdate')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      recipeRepository.update(id, recipeMongo).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('create', () => {
    it('should return a recipe', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'create')
        .mockReturnValueOnce(of(recipeMongo) as any);

      recipeRepository.create(recipeMongo).subscribe({
        // Assert
        next: (result) => {
          expect(recipeModel.create).toBeCalledWith(recipeMongo);
          expect(result).toBe(recipeMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      recipeRepository.create(recipeMongo).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should return a recipe', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'findById')
        .mockReturnValueOnce(of(recipeMongo) as any);

      recipeRepository.findById(id).subscribe({
        // Assert
        next: (result) => {
          expect(recipeModel.findById).toBeCalledWith(id);
          expect(result).toBe(recipeMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      recipeRepository.findById(id).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findAll', () => {
    it('should return a list of recipes', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'find')
        .mockReturnValueOnce(of([recipeMongo]) as any);

      recipeRepository.findAll().subscribe({
        // Assert
        next: (result) => {
          expect(recipeModel.find).toBeCalled();
          expect(result).toEqual([recipeMongo]);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'find')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      recipeRepository.findAll().subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findAllByUserId', () => {
    it('should return a list of recipes', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'find')
        .mockReturnValueOnce(of([recipeMongo]) as any);

      recipeRepository.findAllByUserId(id).subscribe({
        // Assert
        next: (result) => {
          expect(recipeModel.find).toBeCalledWith({ userId: id });
          expect(result).toEqual([recipeMongo]);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'find')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      recipeRepository.findAllByUserId(id).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('delete', () => {
    it('should return a recipe', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'findByIdAndDelete')
        .mockReturnValueOnce(of(recipeMongo) as any);

      recipeRepository.delete(id).subscribe({
        // Assert
        next: (result) => {
          expect(recipeModel.findByIdAndDelete).toBeCalledWith(id);
          expect(result).toBe(recipeMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(recipeModel, 'findByIdAndDelete')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      recipeRepository.delete(id).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });
});
