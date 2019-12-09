import { expect } from 'chai';
import 'mocha';
import { curryFunc, curryMe, doMath, curryMath, ninjaFunc, ninjasOne, ninjasTwo, statusTypes, gamerStatusTypes, typed} from './currying';


describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () => {
    const string1="Hello";
    const string2="Professor";
    const string3="Morgan";
    const curryFuncOut = curryFunc(string1)(string2)(string3);
    console.log("Curry Function Output= " + curryFuncOut);
    const orginalOut = curryMe(string1,string2,string3);
    console.log("Original Function Output= " + orginalOut);
    expect(curryFuncOut).to.equal(orginalOut);
  });

  it('#2 should output the same result as the original function', () => {
    const a = 5;
    const b = 6;
    const c = 7;
    const originalMathOut = doMath(a)(b)(c);
    console.log(originalMathOut);
    const curryMathOut = curryMath(a)(b)(c);
    console.log(curryMathOut);
    expect(curryMathOut).to.equal(originalMathOut);

  });

  it('#3 should return an array containing the ninjas who have a black belt', () => {
    const blackBelts = ninjaFunc(ninjasOne)(ninjasTwo);
    console.log(blackBelts);
    blackBelts.forEach(e=>{
      expect(e.belt).to.equal("black");
    });
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () => {
    const statusArr = typed(ninjasOne)(ninjasTwo)(statusTypes);
    console.log(statusArr);
    const gamerArr = typed(ninjasOne)(ninjasTwo)(gamerStatusTypes);
    console.log(gamerArr);
    expect(statusArr).to.be.an('array');
    statusArr.forEach(element=>{
      expect(element).to.haveOwnProperty('status');
    })
    expect(gamerArr).to.be.an('array');
    gamerArr.forEach(element=>{
      expect(element).to.haveOwnProperty('status');
    })
  });
});
