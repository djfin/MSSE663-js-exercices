
export class Class{
    constructor(public name: string, public semester: string){
        this.name = name;
        this.semester = semester;
    }
}
export interface Student{
    name: string,
    id: number, 
    classSchedule: Class[],
    addClass: (x:Class) => boolean,
    getSchedule: () => Class[]
}
export class UnderGrad implements Student{
    public classSchedule = Array<Class>();
    constructor(public name:string, public id: number){
        this.id = id;
        this.name=name;
    }
    addClass(x: Class): boolean{
        const size = this.classSchedule.length;
        this.classSchedule.push(x);
        return this.classSchedule.length > size;
<<<<<<< HEAD
    }
    getSchedule(): Class[]{
        return this.classSchedule;
    }
=======
    };
    getSchedule(): Class[]{
        return this.classSchedule;
    };
>>>>>>> fff4e61ce7ec07cb57e4c6dda1f1ac05596bee6e
}

const student1 = new UnderGrad("Dan", 2779638);
const class1 = new Class("CS444", "Fall 2019");
console.log(student1.name);
console.log(student1.addClass(class1));
console.log(student1.getSchedule());