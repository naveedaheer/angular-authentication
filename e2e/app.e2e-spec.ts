import { AngularAuthenticationPage } from './app.po';

describe('angular-authentication App', () => {
  let page: AngularAuthenticationPage;

  beforeEach(() => {
    page = new AngularAuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
