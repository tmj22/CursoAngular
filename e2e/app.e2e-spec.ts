import { ProyectoNGPage } from './app.po';

describe('proyecto-ng App', function() {
  let page: ProyectoNGPage;

  beforeEach(() => {
    page = new ProyectoNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
