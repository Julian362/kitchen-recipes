import { validate } from 'class-validator';
import { mockUpdateMealPlannerDto } from '../__mocks__/dto.mock';
import { UpdateMealPlannerDto } from '../update-meal-planner.dto';

describe('UpdateMealPlannerDto', () => {
  let updateMealPlannerDto: UpdateMealPlannerDto;

  beforeEach(() => {
    updateMealPlannerDto = new UpdateMealPlannerDto();
  });

  it('should be defined and is a instance of UpdateMealPlannerDto', () => {
    // Assert
    expect(updateMealPlannerDto).toBeDefined();
    expect(updateMealPlannerDto).toBeInstanceOf(UpdateMealPlannerDto);
  });

  it('should have the required properties', () => {
    // Arrange & Act
    updateMealPlannerDto.name = mockUpdateMealPlannerDto.name;
    updateMealPlannerDto.amount = mockUpdateMealPlannerDto.amount;
    updateMealPlannerDto.notes = mockUpdateMealPlannerDto.notes;

    // Assert
    expect(updateMealPlannerDto.name).toBeDefined();
    expect(updateMealPlannerDto.amount).toBeDefined();
    expect(updateMealPlannerDto.notes).toBeDefined();
  });

  it('should validate the optional', async () => {
    // Arrange
    updateMealPlannerDto.name = undefined;
    updateMealPlannerDto.amount = undefined;
    updateMealPlannerDto.notes = undefined;
    // Act
    const result = await validate(updateMealPlannerDto);

    // Assert
    expect(result.length).toBe(0);
  });

  it('should validate the required properties', async () => {
    // Arrange
    updateMealPlannerDto.name = 1 as any;
    updateMealPlannerDto.amount = 1 as any;
    updateMealPlannerDto.notes = 1 as any;
    // Act
    const result = await validate(updateMealPlannerDto);

    // Assert
    expect(result.length).toBe(3);
  });
});
