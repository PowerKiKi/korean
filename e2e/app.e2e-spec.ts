import { KoreanPage } from './app.po';

describe('korean App', () => {
  let page: KoreanPage;

  beforeEach(() => {
    page = new KoreanPage();
  });

  it('should display basics card', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Basics');
  });
});
