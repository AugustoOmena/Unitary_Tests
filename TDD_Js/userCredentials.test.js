const checkUserCredentials = require('./userCredentials');

test('Verifica credenciais corretas - usuário e senha corretos', () => {
  expect(checkUserCredentials('usuario', 'senha123')).toBe(true);
});

test('Verifica credenciais incorretas - usuário correto, senha incorreta', () => {
  expect(checkUserCredentials('usuario', 'senhaErrada')).toBe(false);
});

test('Verifica credenciais incorretas - usuário incorreto, senha correta', () => {
  expect(checkUserCredentials('usuarioErrado', 'senha123')).toBe(false);
});

test('Verifica credenciais incorretas - usuário e senha incorretos', () => {
  expect(checkUserCredentials('usuarioErrado', 'senhaErrada')).toBe(false);
});