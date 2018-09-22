import { SitesEditModule } from './sites-edit.module';

describe('SitesEditModule', () => {
  let sitesEditModule: SitesEditModule;

  beforeEach(() => {
    sitesEditModule = new SitesEditModule();
  });

  it('should create an instance', () => {
    expect(sitesEditModule).toBeTruthy();
  });
});
