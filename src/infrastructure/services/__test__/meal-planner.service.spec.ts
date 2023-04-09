import { MealPlannerService } from '../meal-planner.service';

describe('MealPlannerService', () => {
  let mealPlannerService: MealPlannerService;

  beforeEach(() => {
    mealPlannerService = new MealPlannerService(null);
  });

  it('should be defined', () => {
    expect(mealPlannerService).toBeDefined();
  });
});
