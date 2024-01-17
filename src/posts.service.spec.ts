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
      const foundPosts = postsService.findMany();
      const expectedPosts = [
        {id: '1', text: 'Post 1'},
        {id: '2', text: 'Post 2'},
        {id: '3', text: 'Post 3'},
        {id: '4', text: 'Post 4'},
      ]
      expect(foundPosts).toEqual(expectedPosts);
    });

    it('should return correct posts for skip and limit options', () => {
      const skip = 1;
      const limit = 2;
      const expectedPosts = [
        {id: '2', text: 'Post 2'},
        {id: '3', text: 'Post 3'}
      ]
      
      const foundPosts = postsService.findMany({ skip, limit });

      expect(foundPosts).toEqual(expectedPosts);
    });

    it('should return correct posts when skip parameter is used', () => {
      const skip = 2;

      const expectedPosts = [
        {id: '3', text: 'Post 3'},
        {id: '4', text: 'Post 4'}
      ]

      const foundPosts = postsService.findMany({ skip });

      expect(foundPosts).toEqual(expectedPosts);
    });

    it('should return correct posts when limit parameter is used', () => {
      const limit = 3;

      const expectedPosts = [
        {id: '1', text: 'Post 1'},
        {id: '2', text: 'Post 2'},
        {id: '3', text: 'Post 3'}
      ]
      const foundPosts = postsService.findMany({ limit });

      expect(foundPosts).toEqual(expectedPosts);
    });
  });
});