import { Injectable } from '@nestjs/common';
import { IngredientMongoService } from '../persistence/database/mongo/services/ingredient.service';

@Injectable()
export class IngredientService extends IngredientMongoService {}
