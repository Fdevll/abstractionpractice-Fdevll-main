/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */

import _ from 'lodash';

export function convertToClock(n1, n2, n3, n4) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
    return undefined;
  }
  const arr = [n1, n2, n3, n4];
  const inc2 = !!arr.includes(2);
  const inc1 = !!arr.includes(1);
  const hour2IfInc2 = arr.filter((item) => item !== 2 && item <= 3).sort((a, b) => b - a)[0];
  const hour2IfInc1 = arr.filter((item) => item && item <= 9).sort((a, b) => b - a)[0];
  if (inc2 === true) {
    const newArr = _.without(arr, 2, hour2IfInc2).sort((a, b) => b - a);
    const min1 = newArr.filter((item) => item < 6).sort((a, b) => b - a)[0];
    const min2 = _.without(newArr, min1);
    return (`2${hour2IfInc2}:${min1}${min2[0]}`);
  } if (inc2 === false && inc1 === true) {
    const newArr = _.without(arr, 1, hour2IfInc1).sort((a, b) => b - a);
    const min1 = newArr.filter((item) => item < 6).sort((a, b) => b - a)[0];
    const min2 = _.without(newArr, min1);
    return (`1${hour2IfInc1}:${min1}${min2[0]}`);
  }
  return (`0${hour2IfInc1}:`);
}

export function singSong(str1, str2 = '') {
  if (arguments.length === 0) return undefined;
  if (str1 === 'pen') return ('I have a pen.');
  if (str1 === 'apple' && str2 === '') return ('I have an apple.');
  if (str1 === 'apple' && str2 === 'pen') return ('Uhh! Apple-pen!');
}

export function countRocks(num) {
  if (typeof num !== 'number') return undefined;
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  let result = 0;
  arr.forEach((item) => (item <= 9 ? result += 50 : result += 100));
  return result;
}

export function getLikers(arr) {
  if (!Array.isArray(arr)) return undefined;

  switch (arr.length) {
    case 0: return ('no one likes this');
    case 1: return (`${arr[0]} likes this`);
    case 2: return (`${arr[0]} and ${arr[1]} like this`);
    case 3: return (`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
    default: return (`${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`);
  }
}

export function sortString(str) {
  if (typeof str !== 'string') return undefined;
  return str
    .split(' ')
    .map((word) => [parseInt(word.match(/\d+/)[0], 10), word])
    .sort((a, b) => a[0] - b[0])
    .map((pair) => pair[1])
    .join(' ');
}