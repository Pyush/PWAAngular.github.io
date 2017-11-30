import { PWAAngularPage } from './app.po';

describe('pwa-angular App', () => {
  let page: PWAAngularPage;

  beforeEach(() => {
    page = new PWAAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
