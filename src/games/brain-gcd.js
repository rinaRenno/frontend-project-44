import { cons } from '@hexlet/pairs';

function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export default () => {
  const firstNum = Math.round(Math.random() * 100);
  const secondNum = Math.round(Math.random() * 100);
  const correctAnswer = gcd(firstNum, secondNum);
  return cons(`${firstNum} ${secondNum}`, correctAnswer.toString());
};
