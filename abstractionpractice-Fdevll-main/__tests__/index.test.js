import { describe, expect, it } from '@jest/globals';
import * as funcs from '../index.js';

describe('task1', () => {
  it('should return undefined', () => {
    expect(funcs.convertToClock()).toBeUndefined();
  });
  it('should work', () => {
    expect(
      funcs.convertToClock(5, 4, 2, 3),
    ).toEqual('23:54');
  });
  it('should work', () => {
    expect(
      funcs.convertToClock(6, 7, 4, 1),
    ).toEqual('17:46');
  });
});

describe('task2', () => {
  it('should return undefined', () => {
    expect(funcs.singSong()).toBeUndefined();
  });
  it('should work', () => {
    expect(
      funcs.singSong('pen'),
    ).toEqual('I have a pen.');
  });
  it('should work', () => {
    expect(
      funcs.singSong('apple'),
    ).toEqual('I have an apple.');
  });
  it('should work', () => {
    expect(
      funcs.singSong('apple', 'pen')
    ).toEqual('Uhh! Apple-pen!');
  });
});

describe('task3', () => {
  it('should return undefined', () => {
    expect(funcs.countRocks()).toBeUndefined();
  });
  it('should work', () => {
    expect(funcs.countRocks(2)).toEqual(100);
  });
  it('should work', () => {
    expect(funcs.countRocks(13)).toEqual(850);
  });
});

describe('task4', () => {
  const users1 = [];
  const users2 = ['Peter'];
  const users3 = ['Jacob', 'Alex']
  const users4 = ['Max', 'John', 'Mark'];
  const users5 = ['Alex', 'Jacob', 'Mark', 'Max'];
  it('should return undefined', () => {
    expect(funcs.getLikers()).toBeUndefined();
  });
  it('should work', () => {
    expect(funcs.getLikers(users1)).toEqual('no one likes this');
  });
  it('should work', () => {
    expect(funcs.getLikers(users2)).toEqual('Peter likes this');
  });
  it('should work', () => {
    expect(funcs.getLikers(users3)).toEqual('Jacob and Alex like this');
  });
  it('should work', () => {
    expect(funcs.getLikers(users4)).toEqual('Max, John and Mark like this');
  });
  it('should work', () => {
    expect(funcs.getLikers(users5)).toEqual('Alex, Jacob and 2 others like this');
  });
});

describe('task5', () => {
  it('should not count', () => {
    expect(funcs.sortString()).toBeUndefined();
  });
  it('should count', () => {
    expect(funcs.sortString('is2 Thi1s T4est 3a')).toEqual('Thi1s is2 3a T4est');
  });
  it('should count', () => {
    expect(funcs.sortString('4of Fo1r pe6ople g3ood th5e the2')).toEqual('Fo1r the2 g3ood 4of th5e pe6ople');
  });
});
