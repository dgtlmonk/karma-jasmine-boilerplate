"use strict";

describe('a test suite', function() {
  it('should pass', function() {
    expect(1).toBe(1);
  });

  it('should pass by executing code in source', function() {
    expect(helloWorld).toBeDefined();
    expect(helloWorld()).toBe(true);
  });

  it('should fail', function() {
    expect(false).toBe(true);
  });
});
