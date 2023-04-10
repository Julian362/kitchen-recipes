import { RecipeService } from '@infrastructure/services';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { id, recipeMongo } from '../../__mocks__/repository.mock';
import { RecipeRepository } from '../../repositories/recipe.repository';
describe('RecipeService', () => {
  let service: RecipeService;
  let repository: RecipeRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        {
          provide: RecipeRepository,
          useValue: {
            create: jest.fn(),
            findById: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
            findAll: jest.fn(),
            findAllByUserId: jest.fn(),
          },
        },
      ],
    }).compile();

    service = app.get<RecipeService>(RecipeService);
    repository = app.get<RecipeRepository>(RecipeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a recipe', (done) => {
      //Arrange
      jest.spyOn(repository, 'create').mockReturnValueOnce(of(recipeMongo));

      //Act
      service.create(recipeMongo).subscribe((recipe) => {
        //Assert
        expect(recipe).toEqual(recipeMongo);
        expect(repository.create).toHaveBeenCalled();
        expect(repository.create).toHaveBeenCalledWith(recipeMongo);
        done();
      });
    });

    it('should throw an error when create a recipe', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.create(recipeMongo).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.create).toHaveBeenCalled();
          expect(repository.create).toHaveBeenCalledWith(recipeMongo);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should find a recipe by id', (done) => {
      //Arrange
      jest.spyOn(repository, 'findById').mockReturnValueOnce(of(recipeMongo));

      //Act
      service.findById(id).subscribe((recipe) => {
        //Assert
        expect(recipe).toEqual(recipeMongo);
        expect(repository.findById).toHaveBeenCalled();
        expect(repository.findById).toHaveBeenCalledWith(id);
        done();
      });
    });
    it('should throw an error when find a recipe by id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.findById(id).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.findById).toHaveBeenCalled();
          expect(repository.findById).toHaveBeenCalledWith(id);
          done();
        },
      });
    });
  });

  describe('delete', () => {
    it('should delete a recipe by id', (done) => {
      //Arrange
      jest.spyOn(repository, 'delete').mockReturnValueOnce(of(recipeMongo));

      //Act
      service.delete(id).subscribe((recipe) => {
        //Assert
        expect(recipe).toEqual(recipeMongo);
        expect(repository.delete).toHaveBeenCalled();
        expect(repository.delete).toHaveBeenCalledWith(id);
        done();
      });
    });

    it('should throw an error when delete a recipe by id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'delete')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.delete(id).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.delete).toHaveBeenCalled();
          expect(repository.delete).toHaveBeenCalledWith(id);
          done();
        },
      });
    });
  });

  describe('update', () => {
    it('should update a recipe by id', (done) => {
      //Arrange
      jest.spyOn(repository, 'update').mockReturnValueOnce(of(recipeMongo));

      //Act
      service.update(id, recipeMongo).subscribe((recipe) => {
        //Assert
        expect(recipe).toEqual(recipeMongo);
        expect(repository.update).toHaveBeenCalled();
        expect(repository.update).toHaveBeenCalledWith(id, recipeMongo);
        done();
      });
    });

    it('should throw an error when update a recipe by id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'update')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.update(id, recipeMongo).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.update).toHaveBeenCalled();
          expect(repository.update).toHaveBeenCalledWith(id, recipeMongo);
          done();
        },
      });
    });
  });

  describe('findAllByUserId', () => {
    it('should find all recipes by user id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findAllByUserId')
        .mockReturnValueOnce(of([recipeMongo]));

      //Act
      service.findAllByUserId(id).subscribe((recipes) => {
        //Assert
        expect(recipes).toEqual([recipeMongo]);
        expect(repository.findAllByUserId).toHaveBeenCalled();
        expect(repository.findAllByUserId).toHaveBeenCalledWith(id);
        done();
      });
    });

    it('should throw an error when find all recipes by user id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findAllByUserId')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.findAllByUserId(id).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.findAllByUserId).toHaveBeenCalled();
          expect(repository.findAllByUserId).toHaveBeenCalledWith(id);
          done();
        },
      });
    });
  });
});
