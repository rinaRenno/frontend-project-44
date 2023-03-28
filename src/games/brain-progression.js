
import { cons } from '@hexlet/pairs';

export default () => {
  const firstNumber = Math.round(Math.random() * 10);
  const add = Math.round(Math.random() * 10);
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(firstNumber + add * i);
  }

  const hideSymbol = Math.round(Math.random() * (array.length - 1));
  const correctAnswer = array[hideSymbol];
  array[hideSymbol] = '..';

  return cons(array.join(' '), correctAnswer.toString());
};