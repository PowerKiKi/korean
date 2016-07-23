export class KoreanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('korean-app h1')).getText();
  }
}
