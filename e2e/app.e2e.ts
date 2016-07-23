import { KoreanPage } from './app.po';

describe('korean App', function() {
  let page: KoreanPage;

  beforeEach(() => {
    page = new KoreanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('korean works!');
  });
});
