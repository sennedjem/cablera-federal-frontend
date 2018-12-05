import { FavoritePostsModule } from './favorite-posts.module';

describe('FavoritePostsModule', () => {
  let favoritePostsModule: FavoritePostsModule;

  beforeEach(() => {
    favoritePostsModule = new FavoritePostsModule();
  });

  it('should create an instance', () => {
    expect(favoritePostsModule).toBeTruthy();
  });
});
