import { RecipeService } from '../recipe..service';

describe('RecipeService', () => {
  let recipeService: RecipeService;

  beforeEach(() => {
    recipeService = new RecipeService(null);
  });

  it('should be defined', () => {
    expect(recipeService).toBeDefined();
  });
});
