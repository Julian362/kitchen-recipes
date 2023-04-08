import { Injectable } from '@nestjs/common';
import { MealPlannerMongoService } from '../persistence/database/mongo/services/meal-planner.service';

@Injectable()
export class MealPlannerService extends MealPlannerMongoService {}
