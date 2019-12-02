import { expect } from 'chai';
import 'mocha';
import { fruits, a,b, food,c,d,others, statement} from './array-destructuring'

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(a).to.equal(fruits[0]);
    expect(b).to.equal(fruits[1]);
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(c).to.equal(food[0]);
    expect(d).to.equal(food[1]);
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it('#3 should construct a statement from the given objarrayect', () => {
    expect(statement).to.equal("hello, taylor")
  });
});
