describe('demo teste', function() {

  beforeEach(function(){
    browser.get('http://localhost:9000/demo');
  });

  it('should add new fixture itens', function() {

    repeater = by.repeater('fixture in fixtures');
    fixtures = element.all(repeater);

    expect(fixtures.count()).toBe(4);

    element(by.model('newFixture')).sendKeys('Facilita os testes e2e');
    element(by.id('btn-save')).click();

    expect(fixtures.count()).toBe(5);

  });

  it('should remove fixture itens', function() {

    repeater = by.repeater('fixture in fixtures');

    fixtures = element.all(repeater);
    expect(fixtures.count()).toBe(4);

    element(by.id('fix-a')).click().then(function(){
      expect(fixtures.count()).toBe(3);
    });

  });
});
