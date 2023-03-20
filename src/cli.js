#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  return `Hello, ${username}!`;
};
