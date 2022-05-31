import { themeVal } from './theme';

describe('themeVal', () => {
  test('creates a function to get a deep theme value', () => {
    const func = themeVal('colors.primary.500');

    expect(func({
      theme: {
        colors: {
          primary: {
            500: 'green'
          }
        }
      }
    }))
      .toBe('green');
  });
});