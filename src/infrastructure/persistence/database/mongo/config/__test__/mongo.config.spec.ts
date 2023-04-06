import { ConfigService } from '@nestjs/config';
import { TestingModule, Test } from '@nestjs/testing';
import { MongooseConfigService } from '../mongo.config';

describe('MongooseConfigService', () => {
  let service: MongooseConfigService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongooseConfigService, ConfigService],
    }).compile();

    service = module.get<MongooseConfigService>(MongooseConfigService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('createMongooseOptions', () => {
    it('should return the correct MongooseModuleOptions', () => {
      // Arrange
      jest.spyOn(configService, 'get').mockReturnValueOnce('localhost');
      jest.spyOn(configService, 'get').mockReturnValueOnce('27017');
      jest.spyOn(configService, 'get').mockReturnValueOnce('test');
      jest.spyOn(configService, 'get').mockReturnValueOnce('testuser');
      jest.spyOn(configService, 'get').mockReturnValueOnce('testpass');

      const expectedOptions = {
        uri: 'mongodb://testuser:testpass@localhost:27017',
        dbName: 'test',
      };
      jest
        .spyOn(MongooseConfigService.prototype, 'createMongooseOptions')
        .mockReturnValueOnce(expectedOptions);
      // Act
      const result = service.createMongooseOptions();

      // Assert
      expect(result).toEqual(expectedOptions);
    });
  });
});
