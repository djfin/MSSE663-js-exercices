import { expect } from 'chai';
import 'mocha';
import { objArrFunc, things, thingFunc } from './higher-order-funcs';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () => {
    const result = objArrFunc(things);
    console.log(result);
    expect(result).to.eql([{ id: 1, name:'thing' }, { id: 2, name:'thing' }]);
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () => {
    const thing1 = thingFunc("1");
    console.log(thing1);
    expect(thing1).to.eql([{id:1,name:'thing'}]);
  });
});
