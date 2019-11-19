import { expect } from 'chai';
import 'mocha';
import {UnderGrad, Class} from './app'

describe('Test for app.ts', () =>{
    const student1 = new UnderGrad("Dan", 2779638);
    const class1 = new Class("CS44", "Fall 2019");
    it('should output student1\'s age', ()=> {
        expect(student1.name).to.equal("Dan"); 
    })
    it('should output student1\'s id', ()=> {
        expect(student1.id).to.equal(2779638); 
    })
    it('should output true', ()=> {
        expect(student1.addClass(class1)).to.equal(true); 
    })
    it('should output class added to class schedule', ()=> {
        expect(student1.getSchedule()[0]).to.equal(class1); 
    })

});