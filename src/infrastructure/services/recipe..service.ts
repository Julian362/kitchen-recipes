import { RecipeMongoService } from '@infrastructure/persistence/database/mongo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService extends RecipeMongoService {}
