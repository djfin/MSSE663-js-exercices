import { expect } from 'chai';
import { of,} from 'rxjs';
import 'mocha';
import {UnderGrad, Class} from './app'

describe('Test for observable.ts', () =>{
    const student1 = new UnderGrad("Dan", 2779638);
    const class1 = new Class("CS44", "Fall 2019");
    student1.addClass(class1);
    const student2 = new UnderGrad("Dyl", 2779639);
    var studentsArr = [student1, student2];
    const students = of(studentsArr);
    it('should assert the students in the right order', () =>{
        students.subscribe(item => {
            expect(item).to.equal(studentsArr)
        });
    })
    const student3 = new UnderGrad("Gabe", 2779640);
    studentsArr.push(student3);
    it('should assert the students in the right order', () =>{
        students.subscribe(item => {
            expect(item).to.equal(studentsArr)
        });
    })
});