import { TestBed } from '@angular/core/testing';

import { ProfileImageLoaderService } from './profile-image-loader.service';

describe('ProfileImageLoaderService', () => {
  let service: ProfileImageLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileImageLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
