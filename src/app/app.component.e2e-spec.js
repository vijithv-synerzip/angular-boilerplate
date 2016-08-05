describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("AutoiQ");
  });

  it('should have <header>', function () {
    expect(element(by.css('autoiq-app header')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('main .title')).getText()).toEqual('Hello from Angular 2!');
  });



});
