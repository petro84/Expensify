import { login, logout } from '../../actions/auth';

test('should setup login action', () => {
  const uid = 'any';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('should setup logout action', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
