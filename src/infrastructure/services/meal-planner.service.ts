import { Injectable } from '@nestjs/common';
import { MealPlannerMongoService } from '../persistence/database/mongo/services/meal-planner.service';

/**
 * interface for the meal planner service
 *
 * @export
 * @class MealPlannerService
 * @typedef {MealPlannerService}
 * @extends {MealPlannerMongoService}
 */
@Injectable()
export class MealPlannerService extends MealPlannerMongoService {}
