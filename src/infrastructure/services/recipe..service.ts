import { Injectable } from '@nestjs/common';
import { RecipeMongoService } from '../persistence/database/mongo/services/recipe.service';

/**
 * interface for the recipe service
 *
 * @export
 * @class RecipeService
 * @typedef {RecipeService}
 * @extends {RecipeMongoService}
 */
@Injectable()
export class RecipeService extends RecipeMongoService {}
