// #1 Convert this javascript function to a curried function
export function curryMe(string1:string, string2:string, string3:string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here

export const curryFunc = (string1:string) => (string2:string) => (string3:string)=>{
  return [string1,string2,string3].join(' ')
}

// #2 Hoist and convert nested functions to curried functions
export function doMath(a:number) {
  return function add(b:number) {
    return function subtract(c:number) {
      return a + b - c;
    };
  };
}

// source code here

export const curryMath = (a:number) => (b:number) => (c:number)=>{
  return subFunc(addFunc(a,b),c);
}

export const addFunc = (a:number, b:number) => {
  return a+b
}

export const subFunc = (a:number,b:number) =>{
  return a-b;
}



// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

export interface ninja{
  name:string,
  belt:string
}

// source code here
export const ninjaFunc = (ninjas1:Array<any>) => (ninjas2:Array<any>)=>{
  let blackBelts = new Array<any>();
  ninjas1.forEach(element=>{
    if(element.belt=="black"){
      blackBelts.push(element);
    }
  })
  ninjas2.forEach(e=>{
    if(e.belt=="black"){
      blackBelts.push(e);
    }
  })
  return blackBelts;
}
/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */


export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

export interface statusObj {
  white:string,
  green:string,
  black:string
}

// source code here

export const typed = (ninjas1:Array<ninja>) => (ninjas2:Array<ninja>) => (types:statusObj)=>{
  let statusArr = new Array<any>();
  ninjas1.forEach(element=>{
    switch(element.belt){
      case("white"):
      {
        let tempObj={...element,status:types.white};
        statusArr.push(tempObj);
        break;
      }
      case("black"):
      {
        let tempObj={...element,status:types.black};
        statusArr.push(tempObj);
        break;
      }
      case("green"):
      {
        let tempObj={...element,status:types.green};
        statusArr.push(tempObj);
        break;
      }
    }
  });
  ninjas2.forEach(element=>{
    switch(element.belt){
      case("white"):
      {
        let tempObj={...element,status:types.white};
        statusArr.push(tempObj);
        break;
      }
      case("black"):
      {
        let tempObj={...element,status:types.black};
        statusArr.push(tempObj);
        break;
      }
      case("green"):
      {
        let tempObj={...element,status:types.green};
        statusArr.push(tempObj);
        break;
      }
    }
  });
  return statusArr;
}
