import { multiplicacion } from '../js/multiplicacion'

test('Multiplicar 3 x 3 equivale a 9', () => {
  expect(multiplicacion(3, 3)).toBe(9);
});