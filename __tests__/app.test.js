const rapid = require('../src/');
describe('rapid', () => {
  test('should be callable', () => {
    expect(typeof rapid).toBe('function');
  });
  describe('http methods', () => {
    let app;
    let listenRef;
    beforeEach(() => {
      app = rapid();
      listenRef.
    });
    afterEach(() => {
      listenRef.off()
    });
    test('has method for basic 4 http method', () => {
      const methods = ['get', 'post', 'patch', 'delete'];
      methods.forEach((method) => {
        expect(app).toHaveProperty(method);
      });
    });
  });
});
