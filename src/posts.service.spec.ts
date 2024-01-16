import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      const result = postsService.findMany();
      expect(result).toEqual(posts);
      expect(result).toHaveLength(posts.length);
    });

    it('should return correct posts for skip and limit options', () => {
      const skip = 1;
      const limit = 2;
      const expectedPosts = posts.slice(skip, skip + limit);
      const result = postsService.findMany({ skip, limit });

      expect(result).toHaveLength(expectedPosts.length);
      expect(result).toEqual(expectedPosts);
    });

    it('should return correct posts when skip parameter is used', () => {
      const skip = 2;
      const expectedPosts = posts.slice(skip);
      const result = postsService.findMany({ skip });

      expect(result).toHaveLength(expectedPosts.length);
      expect(result).toEqual(expectedPosts);
    });

    it('should return correct posts when limit parameter is used', () => {
      const limit = 2;
      const expectedPosts = posts.slice(0, limit);
      const result = postsService.findMany({ limit });

      expect(result).toHaveLength(expectedPosts.length);
      expect(result).toEqual(expectedPosts);
    });
  });
});