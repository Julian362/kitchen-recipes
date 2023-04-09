import { IngredientService } from '../ingredient.service';

describe('IngredientService', () => {
  let ingredientService: IngredientService;

  beforeEach(() => {
    ingredientService = new IngredientService(null);
  });

  it('should be defined', () => {
    expect(ingredientService).toBeDefined();
  });
});
