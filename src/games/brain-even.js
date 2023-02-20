#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export default () => {
  const number = getRandomInt(1, 50);
  let correctAns = '';
  if (number % 2 === 0) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }
  return cons(number, correctAns);
};