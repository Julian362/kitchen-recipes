import { IngredientService } from '@infrastructure/services';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { id, ingredientMongo } from '../../__mocks__/repository.mock';
import { IngredientRepository } from '../../repositories';

describe('IngredientService', () => {
  let service: IngredientService;
  let repository: IngredientRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        IngredientService,
        {
          provide: IngredientRepository,
          useValue: {
            create: jest.fn(),
            findById: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
            findByName: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    service = app.get<IngredientService>(IngredientService);
    repository = app.get<IngredientRepository>(IngredientRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create an ingredient', (done) => {
      //Arrange
      jest.spyOn(repository, 'create').mockReturnValueOnce(of(ingredientMongo));

      //Act
      service.create(ingredientMongo).subscribe((ingredient) => {
        //Assert
        expect(ingredient).toEqual(ingredientMongo);
        expect(repository.create).toHaveBeenCalled();
        expect(repository.create).toHaveBeenCalledWith(ingredientMongo);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.create(ingredientMongo).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.create).toHaveBeenCalled();
          expect(repository.create).toHaveBeenCalledWith(ingredientMongo);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should find an ingredient by id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findById')
        .mockReturnValueOnce(of(ingredientMongo));

      //Act
      service.findById(id).subscribe((ingredient) => {
        //Assert
        expect(ingredient).toEqual(ingredientMongo);
        expect(repository.findById).toHaveBeenCalled();
        expect(repository.findById).toHaveBeenCalledWith(ingredientMongo._id);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.findById(id).subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.findById).toHaveBeenCalled();
          expect(repository.findById).toHaveBeenCalledWith(ingredientMongo._id);
          done();
        },
      });
    });
  });

  describe('update', () => {
    it('should update an ingredient by id', (done) => {
      //Arrange
      jest.spyOn(repository, 'update').mockReturnValueOnce(of(ingredientMongo));

      //Act
      service.update(id, ingredientMongo).subscribe((ingredient) => {
        //Assert
        expect(ingredient).toEqual(ingredientMongo);
        expect(repository.update).toHaveBeenCalled();
        expect(repository.update).toHaveBeenCalledWith(
          ingredientMongo._id,
          ingredientMongo,
        );
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'update')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.update(id, ingredientMongo).subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.update).toHaveBeenCalled();
          expect(repository.update).toHaveBeenCalledWith(
            ingredientMongo._id,
            ingredientMongo,
          );
          done();
        },
      });
    });
  });

  describe('findAll', () => {
    it('should find all ingredients', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findAll')
        .mockReturnValueOnce(of([ingredientMongo]));

      //Act
      service.findAll().subscribe((ingredients) => {
        //Assert
        expect(ingredients).toEqual([ingredientMongo]);
        expect(repository.findAll).toHaveBeenCalled();
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findAll')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.findAll().subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.findAll).toHaveBeenCalled();
          done();
        },
      });
    });
  });

  describe('findByName', () => {
    it('should find an ingredient by name', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findByName')
        .mockReturnValueOnce(of(ingredientMongo));

      //Act
      service.findByName(ingredientMongo.name).subscribe((ingredient) => {
        //Assert
        expect(ingredient).toEqual(ingredientMongo);
        expect(repository.findByName).toHaveBeenCalled();
        expect(repository.findByName).toHaveBeenCalledWith(
          ingredientMongo.name,
        );
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findByName')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.findByName(ingredientMongo.name).subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.findByName).toHaveBeenCalled();
          expect(repository.findByName).toHaveBeenCalledWith(
            ingredientMongo.name,
          );
          done();
        },
      });
    });
  });
});
