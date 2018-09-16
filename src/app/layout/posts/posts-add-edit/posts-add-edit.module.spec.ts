import { PostsAddEditModule } from './posts-add-edit.module';

describe('PostsAddEditModule', () => {
    let postsAddEditModule: PostsAddEditModule;

    beforeEach(() => {
        postsAddEditModule = new PostsAddEditModule();
    });

    it('should create an instance', () => {
        expect(postsAddEditModule).toBeTruthy();
    });
});
