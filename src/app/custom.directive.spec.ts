import { appCustomDirective } from './custom.directive';

describe('SomeClassDirective', () => {
  it('should create an instance', () => {
    const directive = new appCustomDirective();
    expect(directive).toBeTruthy();
  });
});
