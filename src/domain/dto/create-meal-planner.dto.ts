export interface ICreateMealPlannerDto {
  name: string;
  menuDays: { day: string; recipes: string[] }[];
  notes: string;
}
