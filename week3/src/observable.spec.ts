import { expect } from 'chai';
import { Observable, of } from 'rxjs';
import 'mocha';
import {UnderGrad, Class} from './app'

describe('Test for app.ts', () =>{
    const student1 = new UnderGrad("Dan", 2779638);
    const class1 = new Class("CS44", "Fall 2019");
    const student2 = new UnderGrad("Dyl", 2779639);
    var studentsArr = [student1, student2];
    const students = of(studentsArr);
    var subscribe = students.subscribe(item => console.log(item));
    const student3 = new UnderGrad("Gabe", 2779640);
    studentsArr.push(student3);
    var subscribe = students.subscribe(item => console.log(item));
});