import { getThemeVal } from './theme';

describe('getThemeVal', () => {
  test('creates a function to get a deep theme value', () => {
    const func = getThemeVal('colors.primary.500');

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