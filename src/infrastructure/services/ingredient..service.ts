import { IngredientMongoService } from '@infrastructure/persistence/database/mongo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IngredientService extends IngredientMongoService {}
