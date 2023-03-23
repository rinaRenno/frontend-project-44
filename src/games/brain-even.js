#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const num = () => {
  const number = getRandomInt(1, 50);
  let validAnswer = false;
    if (number % 2 === 0) {
      validAnswer = true;
    }
    return [number, validAnswer]
};

export default () => {
  let correctAnswer = '';
  const [number, validAnswer] = num();
  if (validAnswer === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  };
  return cons(number, correctAnswer);
};
