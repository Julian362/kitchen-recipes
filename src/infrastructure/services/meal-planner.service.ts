import { MealPlannerMongoService } from '@infrastructure/persistence/database/mongo';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MealPlannerService extends MealPlannerMongoService {}
