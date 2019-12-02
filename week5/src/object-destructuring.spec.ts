import { expect } from 'chai';
import 'mocha';
import { object, nestedObject, person, job, user, address, id, newNestedObject, greeting, name} from './object-destructuring'

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(person).to.equal(object.name);
    expect(job).to.equal(object.title);
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(user).to.equal(nestedObject.user);
    expect(address).to.equal(nestedObject.address);
    expect(id).to.equal(nestedObject.id);
  });
  it('#3 should create a new object given the destrutured variables from the nested object', () => {
    expect(newNestedObject).to.eql(nestedObject);
  });

  it('#4 should construct a statement from the given object', () => {
    expect(greeting + ", " + name).to.equal("hello, taylor")
  });
});
