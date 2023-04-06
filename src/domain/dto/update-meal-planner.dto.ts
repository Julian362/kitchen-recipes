export interface IUpdateMealPlannerDto {
  name?: string;
  menuDays?: { day: string; recipesId: string[] }[];
  notes?: string;
}
