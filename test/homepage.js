describe('This is the describe block', function() {
  it('This is the it block', function() {
    this.timeout(50000);
    beforeEach(function() {
      // Enter actions before each test
      
    });

    afterEach(function() {
      // Enter actions after each test
    });

    it('POM Test', function() { 
        // Enter test name
        var baseUrl = 'https://www.google.com/';
    });
  });
});