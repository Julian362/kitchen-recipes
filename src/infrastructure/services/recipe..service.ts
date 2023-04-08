import { Injectable } from '@nestjs/common';
import { RecipeMongoService } from '../persistence/database/mongo/services/recipe.service';

@Injectable()
export class RecipeService extends RecipeMongoService {}
