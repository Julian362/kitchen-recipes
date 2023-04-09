import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { of, throwError } from 'rxjs';
import { ingredientMongo } from '../../__mocks__/repository.mock';
import { IngredientDocument, IngredientMongo } from '../../schemas';
import { IngredientRepository } from '../ingredient.repository';

describe('IngredientRepository', () => {
  let ingredientRepository: IngredientRepository;
  let model: Model<IngredientDocument>;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        IngredientRepository,
        {
          provide: getModelToken(IngredientMongo.name),
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    ingredientRepository = app.get<IngredientRepository>(IngredientRepository);
    model = app.get<Model<IngredientDocument>>(
      getModelToken(IngredientMongo.name),
    );
  });

  it('should be defined', () => {
    expect(ingredientRepository).toBeDefined();
  });

  describe('create', () => {
    it('should create an ingredient', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'create')
        .mockReturnValueOnce(of(ingredientMongo) as any);
      ingredientRepository.create(ingredientMongo).subscribe({
        // Assert
        next: (result) => {
          expect(model.create).toBeCalledWith(ingredientMongo);
          expect(result).toBe(ingredientMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);
      ingredientRepository.create(ingredientMongo).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should find an ingredient by id', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'findById')
        .mockReturnValueOnce(of(ingredientMongo) as any);
      ingredientRepository.findById(ingredientMongo._id).subscribe({
        // Assert
        next: (result) => {
          expect(model.findById).toBeCalledWith(ingredientMongo._id);
          expect(result).toBe(ingredientMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);
      ingredientRepository.findById(ingredientMongo._id).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('update', () => {
    it('should update an ingredient', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'findByIdAndUpdate')
        .mockReturnValueOnce(of(ingredientMongo) as any);
      ingredientRepository
        .update(ingredientMongo._id, ingredientMongo)
        .subscribe({
          // Assert
          next: (result) => {
            expect(model.findByIdAndUpdate).toBeCalledWith(
              ingredientMongo._id,
              ingredientMongo,
            );
            expect(result).toBe(ingredientMongo);
            done();
          },
        });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'findByIdAndUpdate')
        .mockReturnValueOnce(throwError(() => new Error()) as any);
      ingredientRepository
        .update(ingredientMongo._id, ingredientMongo)
        .subscribe({
          // Assert
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
            done();
          },
        });
    });
  });

  describe('findByName', () => {
    it('should find an ingredient by name', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'findOne')
        .mockReturnValueOnce(of(ingredientMongo) as any);
      ingredientRepository.findByName(ingredientMongo.name).subscribe({
        // Assert
        next: (result) => {
          expect(model.findOne).toBeCalledWith({ name: ingredientMongo.name });
          expect(result).toBe(ingredientMongo);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest
        .spyOn(model, 'findOne')
        .mockReturnValueOnce(throwError(() => new Error()) as any);
      ingredientRepository.findByName(ingredientMongo.name).subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });

  describe('findAll', () => {
    it('should find all ingredients', (done) => {
      // Arrange & Act
      jest.spyOn(model, 'find').mockReturnValueOnce({
        exec: jest.fn().mockReturnValueOnce(of([ingredientMongo])),
      } as any);
      ingredientRepository.findAll().subscribe({
        // Assert
        next: (result) => {
          expect(model.find).toBeCalled();
          expect(result).toEqual([ingredientMongo]);
          done();
        },
      });
    });
    it('should throw an error', (done) => {
      // Arrange & Act
      jest.spyOn(model, 'find').mockReturnValueOnce({
        exec: jest.fn().mockReturnValueOnce(throwError(() => new Error())),
      } as any);
      ingredientRepository.findAll().subscribe({
        // Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        },
      });
    });
  });
});
