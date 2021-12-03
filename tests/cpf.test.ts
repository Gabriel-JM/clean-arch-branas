import { CPF } from '../src/cpf';

test('should validate cpf', () => {
  const cpf = new CPF('935.411.347-80');
  expect(cpf).toBeTruthy();
});

test('should try to validate an invalid cpf', () => {
  expect(() => new CPF('123.456.789-99')).toThrow(new Error('Invalid CPF'));
});

test('should try to validate a cpf with all digits equal', () => {
  expect(() => new CPF('111.111.111-11')).toThrow(new Error('Invalid CPF'));
});

test('should try to validate a too long invalid cpf', () => {
	expect(() => new CPF('123.456.789-1000')).toThrow(new Error('Invalid CPF'));
});

test('should try to validate a too tiny invalid cpf', () => {
	expect(() => new CPF('123.456')).toThrow(new Error('Invalid CPF'));
});