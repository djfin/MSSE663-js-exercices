import { Observable, of } from 'rxjs';
import {Student, Class, UnderGrad} from './app'

const student1 = new UnderGrad("Dan", 27779638);
const student2 = new UnderGrad("Dyl", 2779639);

const students = of([student1, student2]);
const subscribe = students.subscribe(item => console.log(item));
