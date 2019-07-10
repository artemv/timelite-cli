import test from 'ava';
import m from '..';

test('main', (t) => {
  const data = m({sum: "1:30, 7, 6, 7:40"});
  t.is(data, '22:10');
});
