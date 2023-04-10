import { Delegate } from '@application/delegate';
import {
  ingredientMock,
  recipeMock,
  userMock,
} from '@application/use-cases/__mocks__/user-case.mock';
import { id } from '@infrastructure/persistence/database/mongo/__mocks__/repository.mock';
import {
  IngredientService,
  MealPlannerService,
  RecipeService,
  UserService,
} from '@infrastructure/services';
import { token } from '@infrastructure/utils/services/__mocks__/auth.mock';
import { AuthService } from '@infrastructure/utils/services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { of, throwError } from 'rxjs';
import { mealPlannerMock } from '../../../application/use-cases/__mocks__/user-case.mock';
import { KitchenRecipesController } from '../kitchen-recipes.controller';

describe('KitchenRecipesController', () => {
  let controller: KitchenRecipesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KitchenRecipesController],
      providers: [
        {
          provide: RecipeService,
          useValue: {},
        },
        {
          provide: IngredientService,
          useValue: {},
        },
        {
          provide: MealPlannerService,
          useValue: {},
        },
        {
          provide: UserService,
          useValue: {},
        },
        {
          provide: AuthService,
          useValue: {},
        },
        {
          provide: JwtService,
          useValue: {},
        },
        {
          provide: Delegate,
          useValue: {
            execute: jest.fn(),
            toCreateRecipe: jest.fn(),
            toCreateUser: jest.fn(),
            toCreateIngredient: jest.fn(),
            toCreateMealPlanner: jest.fn(),
            toDeleteRecipe: jest.fn(),
            toDeleteUser: jest.fn(),
            toDeleteMealPlanner: jest.fn(),
            toUpdateRecipe: jest.fn(),
            toUpdateMealPlanner: jest.fn(),
            toUpdateIngredient: jest.fn(),
            toGetAllIngredients: jest.fn(),
            toGetIngredient: jest.fn(),
            toGetIngredientByNames: jest.fn(),
            toGetMealPlanner: jest.fn(),
            toGetRecipe: jest.fn(),
            toGetUser: jest.fn(),
            toGetRecipesByUser: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = app.get<KitchenRecipesController>(KitchenRecipesController);
  });
  describe('create', () => {
    describe('createRecipe', () => {
      it('should return a recipe', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(recipeMock));

        //Act & Assert
        controller.createRecipe(recipeMock).subscribe((data) => {
          expect(data).toEqual(recipeMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.createRecipe(recipeMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('createUser', () => {
      it('should return a user', () => {
        //Arrange
        jest.spyOn(Delegate.prototype, 'execute').mockReturnValue(of(userMock));

        //Act & Assert
        controller.createUser(userMock).subscribe((data) => {
          expect(data).toEqual(userMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.createUser(userMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('createIngredient', () => {
      it('should return an ingredient', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(ingredientMock));

        //Act & Assert
        controller.createIngredient(ingredientMock).subscribe((data) => {
          expect(data).toEqual(ingredientMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.createIngredient(ingredientMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('createMealPlanner', () => {
      it('should return a meal planner', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(mealPlannerMock));

        //Act & Assert
        controller.createMealPlanner(mealPlannerMock).subscribe((data) => {
          expect(data).toEqual(mealPlannerMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.createMealPlanner(mealPlannerMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });
  });

  describe('delete', () => {
    describe('deleteRecipe', () => {
      it('should return a recipe', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(recipeMock));

        //Act & Assert
        controller.deleteRecipe(id).subscribe((data) => {
          expect(data).toEqual(recipeMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.deleteRecipe(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('deleteUser', () => {
      it('should return a user', () => {
        //Arrange
        jest.spyOn(Delegate.prototype, 'execute').mockReturnValue(of(userMock));

        //Act & Assert
        controller.deleteUser(id).subscribe((data) => {
          expect(data).toEqual(userMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.deleteUser(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('deleteMealPlanner', () => {
      it('should return a meal planner', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(mealPlannerMock));

        //Act & Assert
        controller.deleteMealPlanner(id).subscribe((data) => {
          expect(data).toEqual(mealPlannerMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.deleteMealPlanner(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });
  });

  describe('update', () => {
    describe('updateRecipe', () => {
      it('should return a recipe', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(recipeMock));

        //Act & Assert
        controller.updateRecipe(id, recipeMock).subscribe((data) => {
          expect(data).toEqual(recipeMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.updateRecipe(id, recipeMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('updateMealPlanner', () => {
      it('should return a meal planner', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(mealPlannerMock));

        //Act & Assert
        controller.updateMealPlanner(id, mealPlannerMock).subscribe((data) => {
          expect(data).toEqual(mealPlannerMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.updateMealPlanner(id, mealPlannerMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('updateIngredient', () => {
      it('should return an ingredient', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(ingredientMock));

        //Act & Assert
        controller.updateIngredient(id, ingredientMock).subscribe((data) => {
          expect(data).toEqual(ingredientMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.updateIngredient(id, ingredientMock).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });
  });

  describe('get', () => {
    describe('getRecipe', () => {
      it('should return a recipe', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(recipeMock));

        //Act & Assert
        controller.getRecipes(id).subscribe((data) => {
          expect(data).toEqual(recipeMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getRecipes(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('getMealPlanner', () => {
      it('should return a meal planner', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(mealPlannerMock));

        //Act & Assert
        controller.getMealPlanner(id).subscribe((data) => {
          expect(data).toEqual(mealPlannerMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getMealPlanner(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('getIngredient', () => {
      it('should return an ingredient', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(ingredientMock));

        //Act & Assert
        controller.getIngredientById(id).subscribe((data) => {
          expect(data).toEqual(ingredientMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getIngredientById(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('getIngredients', () => {
      it('should return an ingredient', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(ingredientMock));

        //Act & Assert
        controller.getIngredients().subscribe((data) => {
          expect(data).toEqual(ingredientMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getIngredients().subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('getIngredientByName', () => {
      it('should return an ingredient', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of(ingredientMock));

        //Act & Assert
        controller.getIngredientByName('name').subscribe((data) => {
          expect(data).toEqual(ingredientMock);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getIngredientByName('name').subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('getUser', () => {
      it('should return a user', () => {
        //Arrange
        jest.spyOn(Delegate.prototype, 'execute').mockReturnValue(
          of({
            data: userMock,
            token: token,
          }),
        );

        //Act & Assert
        controller.getUser(id).subscribe((data) => {
          expect(data).toEqual({
            data: userMock,
            token: token,
          });
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getUser(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });

    describe('getRecipesByUserId', () => {
      it('should return a recipe', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(of([recipeMock]));

        //Act & Assert
        controller.getRecipesByUserId(id).subscribe((data) => {
          expect(data).toEqual([recipeMock]);
        });
      });
      it('should throw an error', () => {
        //Arrange
        jest
          .spyOn(Delegate.prototype, 'execute')
          .mockReturnValue(throwError(() => new Error()) as any);

        //Act & Assert
        controller.getRecipesByUserId(id).subscribe({
          error: (error) => {
            expect(error).toBeInstanceOf(Error);
          },
        });
      });
    });
  });
});
