import { IUseCase } from '@application/interface';
import { ICreateMealPlannerDto } from '@domain/dto';
import { MealPlannerDomainModel } from '@domain/models';
import { IMealPlannerService, IRecipeService } from '@domain/services';
import { NotFoundException } from '@nestjs/common';
import { Observable, map, of, switchMap, throwError } from 'rxjs';

export class UpdateMealPlannerUseCase implements IUseCase {
  constructor(
    private readonly service: IMealPlannerService,
    private readonly recipeService: IRecipeService,
  ) {}

  execute(
    _id: string,
    mealPlanner: ICreateMealPlannerDto,
  ): Observable<MealPlannerDomainModel> {
    return this.service.findById(_id).pipe(
      switchMap((entity) => {
        const updateMealPlanner = new MealPlannerDomainModel();
        updateMealPlanner.name = mealPlanner.name || entity.name;
        updateMealPlanner.amount = mealPlanner.amount || entity.amount;
        updateMealPlanner.notes = mealPlanner.notes || entity.notes;
        return this.service.update(_id, updateMealPlanner);
      }),
    );
  }

  isExistRecipes(mealPlanner: ICreateMealPlannerDto): Observable<boolean> {
    const result = mealPlanner.amount.every((recipe) =>
      this.recipeService.findById(recipe.ingredientId).pipe(
        map((entity) => {
          return entity ? true : false;
        }),
      ),
    );

    return result
      ? of(true)
      : throwError(() => new NotFoundException('Recipe not found'));
  }
}
