import { Injectable } from '@nestjs/common';
import { IngredientMongoService } from '../persistence/database/mongo/services/ingredient.service';

/**
 * interface for the ingredient service
 *
 * @export
 * @class IngredientService
 * @typedef {IngredientService}
 * @extends {IngredientMongoService}
 */
@Injectable()
export class IngredientService extends IngredientMongoService {}
