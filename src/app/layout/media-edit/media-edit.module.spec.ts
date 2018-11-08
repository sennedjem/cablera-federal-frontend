import { MediaEditModule } from './media-edit.module';

describe('MediaEditModule', () => {
  let mediaEditModule: MediaEditModule;

  beforeEach(() => {
    mediaEditModule = new MediaEditModule();
  });

  it('should create an instance', () => {
    expect(mediaEditModule).toBeTruthy();
  });
});
