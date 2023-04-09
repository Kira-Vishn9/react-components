import PostService from '../PostService';

describe('PostService', () => {
  it('should return character by name', async () => {
    const name = 'Rick Sanchez';
    const response = await PostService.getByAtrributs(name);
    expect(response.data).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0);
    expect(response.data.results[0].name).toBe(name);
  });
});

describe('PostService', () => {
  it('should return character by id', async () => {
    const id = 1; // указываем id персонажа
    const response = await PostService.getById(id);
    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(id);
  });
});
