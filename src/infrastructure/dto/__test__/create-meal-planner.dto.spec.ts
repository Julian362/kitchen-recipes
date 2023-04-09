import { validate } from 'class-validator';
import { mockCreateMealPlannerDto } from '../__mocks__/dto.mock';
import { CreateMealPlannerDto } from '../create-meal-planner.dto';

describe('CreateMealPlannerDto', () => {
  let createMealPlannerDto: CreateMealPlannerDto;

  beforeEach(() => {
    createMealPlannerDto = new CreateMealPlannerDto();
  });

  it('should be defined and is a instance of CreateMealPlannerDto', () => {
    // Assert
    expect(createMealPlannerDto).toBeDefined();
    expect(createMealPlannerDto).toBeInstanceOf(CreateMealPlannerDto);
  });

  it('should have the required properties', () => {
    // Arrange & Act
    createMealPlannerDto.amount = mockCreateMealPlannerDto.amount;
    createMealPlannerDto.name = mockCreateMealPlannerDto.name;
    createMealPlannerDto.notes = mockCreateMealPlannerDto.notes;
    // Assert
    expect(createMealPlannerDto.amount).toBeDefined();
    expect(createMealPlannerDto.name).toBeDefined();
    expect(createMealPlannerDto.notes).toBeDefined();
  });

  it('should validate the required properties', async () => {
    // Act
    const error = await validate(createMealPlannerDto);
    // Assert
    expect(error.length).toBe(3);
  });
});
