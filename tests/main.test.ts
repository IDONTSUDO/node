import { hello } from "../src/main.js";

 
describe('greeter function', () => {
  let timeoutSpy: jest.SpyInstance;

  beforeAll(async () => {

    jest.useFakeTimers();
    timeoutSpy = jest.spyOn(global, 'setTimeout');
    jest.runOnlyPendingTimers();

  });

  // Teardown (cleanup) after assertions
  afterAll(() => {
    timeoutSpy.mockRestore();
  });

  it('greets a user with `Hello, {name}` message', () => {
    expect(hello()).toBe('hello');
  });
});
