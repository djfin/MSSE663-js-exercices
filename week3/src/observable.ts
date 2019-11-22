import { of } from 'rxjs';
import { UnderGrad} from './app'

const student1 = new UnderGrad("Dan", 27779638);
const student2 = new UnderGrad("Dyl", 2779639);

const students = of([student1, student2]);
students.subscribe(item => console.log(item));
