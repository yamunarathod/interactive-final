import { TestBed } from '@angular/core/testing';

import { VideoSignalService } from './video-signal.service';

describe('VideoSignalService', () => {
  let service: VideoSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
