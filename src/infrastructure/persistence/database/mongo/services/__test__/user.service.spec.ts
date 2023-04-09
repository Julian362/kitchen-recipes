import { UserService } from '@infrastructure/services';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { UserRepository } from '../..';
import {
  id,
  mealPlannerMongo,
  userMongo,
} from '../../__mocks__/repository.mock';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn(),
            findById: jest.fn(),
            delete: jest.fn(),
            addMealPlanner: jest.fn(),
          },
        },
      ],
    }).compile();

    service = app.get<UserService>(UserService);
    repository = app.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', (done) => {
      //Arrange
      jest.spyOn(repository, 'create').mockReturnValueOnce(of(userMongo));

      //Act
      service.create(userMongo).subscribe((user) => {
        //Assert
        expect(user).toEqual(userMongo);
        expect(repository.create).toHaveBeenCalled();
        expect(repository.create).toHaveBeenCalledWith(userMongo);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'create')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.create(userMongo).subscribe({
        //Assert
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          expect(repository.create).toHaveBeenCalled();
          expect(repository.create).toHaveBeenCalledWith(userMongo);
          done();
        },
      });
    });
  });

  describe('findById', () => {
    it('should find a user by id', (done) => {
      //Arrange
      jest.spyOn(repository, 'findById').mockReturnValueOnce(of(userMongo));

      //Act
      service.findById(userMongo._id).subscribe((user) => {
        //Assert
        expect(user).toEqual(userMongo);
        expect(repository.findById).toHaveBeenCalled();
        expect(repository.findById).toHaveBeenCalledWith(userMongo._id);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'findById')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.findById(userMongo._id).subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.findById).toHaveBeenCalled();
          expect(repository.findById).toHaveBeenCalledWith(userMongo._id);
          done();
        },
      });
    });
  });

  describe('delete', () => {
    it('should delete a user by id', (done) => {
      //Arrange
      jest.spyOn(repository, 'delete').mockReturnValueOnce(of(userMongo));

      //Act
      service.delete(userMongo._id).subscribe((user) => {
        //Assert
        expect(user).toEqual(userMongo);
        expect(repository.delete).toHaveBeenCalled();
        expect(repository.delete).toHaveBeenCalledWith(userMongo._id);
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'delete')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.delete(userMongo._id).subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.delete).toHaveBeenCalled();
          expect(repository.delete).toHaveBeenCalledWith(userMongo._id);
          done();
        },
      });
    });
  });

  describe('addMealPlanner', () => {
    it('should add a meal planner to a user', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'addMealPlanner')
        .mockReturnValueOnce(of(userMongo));

      //Act
      service.addMealPlanner(id, mealPlannerMongo).subscribe((user) => {
        //Assert
        expect(user).toEqual(userMongo);
        expect(repository.addMealPlanner).toHaveBeenCalled();
        expect(repository.addMealPlanner).toHaveBeenCalledWith(
          id,
          mealPlannerMongo,
        );
        done();
      });
    });

    it('should throw an error', (done) => {
      //Arrange
      jest
        .spyOn(repository, 'addMealPlanner')
        .mockReturnValueOnce(throwError(() => new Error()) as any);

      //Act
      service.addMealPlanner(id, mealPlannerMongo).subscribe({
        error: (error) => {
          //Assert
          expect(error).toBeInstanceOf(Error);
          expect(repository.addMealPlanner).toHaveBeenCalled();
          expect(repository.addMealPlanner).toHaveBeenCalledWith(
            id,
            mealPlannerMongo,
          );
          done();
        },
      });
    });
  });
});
