// 자바스크립트에서 기본으로 제공해주는 타입들
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 3.3; // 숫자만 할당 가능
stringValue = "hello";  // 문자열만 할당 가능
stringValue = `hello ${1+1} hi` // 스트링인터폴네이션 기능 표현식을 넣으면 결과가 문자열로 바뀌어서 나온다.
booleanValue = true // true 또는 false 값만 할당 가능
undefinedValue = undefined;
undefinedValue = null;
anyValue = 1;
anyValue = "3";
// 최상위 타입 아무값이나 할당 가능

objValue =  { name: "Hong" }//원시형 타입을 제외한 값들을 할당 가능 객체가 할당가능
objValue = new String(33); //new를 쓰면 객체가 반환이되어 33이라는 문자열이 반환되는것이 아니다.
// 숫자 문자형 불린 -> 원시형 타입

symbolValue = Symbol();

let nameList: string[];
nameList = ["1","3"]; // 이런식으로 문자열만 넣을수있다.
nameList.push("hello"); // 숫자 같이 다른 타입을 넣으면 오류가 난다.

let user1: {
    name:string,
    score:number
};
user1 = {
    name:'Hong',
    score:30
}
let user2: {
    name:string,
    score:number
}

let tuple2: [number, string]; // 이렇게 타입을 지정해주면
let tuple3: [number, number, string];
tuple2 = [1, "Hi"] // 선언할때 같은 타입으로 선언하지 않으면 오류가 난다.
tuple3 = [1, 2, "HI"];