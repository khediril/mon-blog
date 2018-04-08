import { MonBlogPage } from './app.po';

describe('mon-blog App', () => {
  let page: MonBlogPage;

  beforeEach(() => {
    page = new MonBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
