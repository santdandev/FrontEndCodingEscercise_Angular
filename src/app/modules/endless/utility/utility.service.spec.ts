import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let service: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule, UtilityService]
    });
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
