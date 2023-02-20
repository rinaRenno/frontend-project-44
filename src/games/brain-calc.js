#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

export default () => {
  let correctAnswer = 0;
  const signs = ['+', '-', '*'];
  const firstNum = Math.round(Math.random() * 10);
  const secondNum = Math.round(Math.random() * 10);
  const sign = Math.round(Math.random() * 2);
  if (signs[sign] === '+') {
    correctAnswer = (firstNum + secondNum);
  } else if (signs[sign] === '-') {
    correctAnswer = (firstNum - secondNum);
  } else {
    correctAnswer = (firstNum * secondNum);
  }

  return cons(`${firstNum} ${signs[sign]} ${secondNum}`, correctAnswer.toString());
};
