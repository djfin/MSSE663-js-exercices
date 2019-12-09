/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */

export const objFunc = (element:string)=>{
    let elementName= element.slice(0,element.length-1);
    let elementId:number= new Number(element.slice(element.length-1)).valueOf();
    let tempObj = {id:elementId,name:elementName};
    return tempObj
}
export const objArrFunc = (arr:Array<string>) =>{
    return arr.map(element => objFunc(element))
}

export const things = ['thing1', 'thing2'];

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from 1 to return a single thing object.
 * - Hoist that filter callback and curry all functions.
 */
export interface thingObj{
    id:number,
    name:string
}

export const thingFunc = (key:string)=>{
    let objArr = objArrFunc(things);
    let k:number=new Number(key).valueOf();
    return objArr.filter(element=>filterfunc(element,k));
}

export const filterfunc= (thing:thingObj,key:number)=>{
    return (thing.id==key);
}
