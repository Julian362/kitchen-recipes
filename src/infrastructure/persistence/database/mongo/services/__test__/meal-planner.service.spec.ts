import { MealPlannerService } from '@infrastructure/services';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { id, mealPlannerMongo } from '../../__mocks__/repository.mock';
import { MealPlannerRepository } from '../../repositories';

describe('MealPlannerService', () => {
  let service: MealPlannerService;
  let repository: MealPlannerRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        MealPlannerService,
        {
          provide: MealPlannerRepository,
          useValue: {
            create: jest.fn(),
            findById: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    service = app.get<MealPlannerService>(MealPlannerService);
    repository = app.get<MealPlannerRepository>(MealPlannerRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a meal planner', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'create')
        .mockReturnValueOnce(of(mealPlannerMongo));

      //Act
      service.create(mealPlannerMongo).subscribe((mealPlanner) => {
        //Assert
        expect(mealPlanner).toEqual(mealPlannerMongo);
        expect(repository.create).toHaveBeenCalled();
        expect(repository.create).toHaveBeenCalledWith(mealPlannerMongo);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.create(mealPlannerMongo).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.create).toHaveBeenCalled();
          expect(repository.create).toHaveBeenCalledWith(mealPlannerMongo);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should find a meal planner by id', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findById')
        .mockReturnValueOnce(of(mealPlannerMongo));

      //Act
      service.findById(mealPlannerMongo._id).subscribe((mealPlanner) => {
        //Assert
        expect(mealPlanner).toEqual(mealPlannerMongo);
        expect(repository.findById).toHaveBeenCalled();
        expect(repository.findById).toHaveBeenCalledWith(mealPlannerMongo._id);
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
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.findById).toHaveBeenCalled();
          expect(repository.findById).toHaveBeenCalledWith(
            mealPlannerMongo._id,
          );
          done();
        },
      });
    });
  });

  describe('delete', () => {
    it('should delete a meal planner', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'delete')
        .mockReturnValueOnce(of(mealPlannerMongo));

      //Act
      service.delete(mealPlannerMongo._id).subscribe((deleted) => {
        //Assert
        expect(deleted).toEqual(mealPlannerMongo);
        expect(repository.delete).toHaveBeenCalled();
        expect(repository.delete).toHaveBeenCalledWith(mealPlannerMongo._id);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'delete')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.delete(mealPlannerMongo._id).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.delete).toHaveBeenCalled();
          expect(repository.delete).toHaveBeenCalledWith(mealPlannerMongo._id);
          done();
        },
      });
    });
  });

  describe('update', () => {
    it('should update a meal planner', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'update')
        .mockReturnValueOnce(of(mealPlannerMongo));

      //Act
      service.update(id, mealPlannerMongo).subscribe((updated) => {
        //Assert
        expect(updated).toEqual(mealPlannerMongo);
        expect(repository.update).toHaveBeenCalled();
        expect(repository.update).toHaveBeenCalledWith(id, mealPlannerMongo);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'update')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.update(id, mealPlannerMongo).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.update).toHaveBeenCalled();
          expect(repository.update).toHaveBeenCalledWith(id, mealPlannerMongo);
          done();
        },
      });
    });
  });
});
