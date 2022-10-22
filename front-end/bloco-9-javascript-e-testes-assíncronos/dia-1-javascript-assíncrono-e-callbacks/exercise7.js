const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('tests if the function uppercase when receiving "string" the return is equal to "STRING"', (done) => {
  uppercase('string', (strUpperCase) => {
    try {
      expect(strUpperCase).tobe('STRING');
      done();
    } catch (error) {
      done(error);
    }
  })
});