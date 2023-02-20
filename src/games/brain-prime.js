#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

function prime(nums) {
  if (nums < 2) {
    return false;
  } if (nums === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(nums);
  while (i <= limit) {
    if (nums % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
}

export default () => {
  const number = Math.round(Math.random() * 100);
  let correctAns = '';
  if (prime(number)) {
    correctAns = 'yes';
  } else {
    correctAns = 'no';
  }

  return cons(number, correctAns);
};
