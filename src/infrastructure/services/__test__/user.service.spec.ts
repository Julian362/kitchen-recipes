import { UserService } from '../user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService(null);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
